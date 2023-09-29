const FishingSpot = require('../models/fishingSpot');
const { cloudinary, resizeAndSave } = require("../cloudinary");

module.exports.newFishingspotForm = (req, res) => {
    res.render('fishingspots/new');
}

module.exports.index = async (req, res) => {
    const locations = await FishingSpot.find();
    res.render('fishingspots/index', { locations });
}

module.exports.createFishingspot = async (req, res) => {
    const location = new FishingSpot(req.body.fishingspot);
    location.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
    location.author = req.user.id;
    await location.save();
    req.flash('success', 'Successfully made a new campground!');
    res.redirect(`/fishingspots/${location._id}`);
}

module.exports.showFishingspot = async (req, res) => {
    const { id } = req.params;
    const location = await FishingSpot.findById(id).populate({
        path: 'reviews',
        populate: {
            path: 'author'
        }
    }).populate('author');

    if (!location) {
        req.flash('error', 'Cannot find that campground!');
        return res.redirect(`/fishingspots`);
    }
    res.render('fishingspots/show', { location });
}

module.exports.editFishingspotForm = async (req, res) => {
    const { id } = req.params;
    const location = await FishingSpot.findById(id);
    if (!location) {
        req.flash('error', 'Cannot find that campground!');
        return res.redirect(`/fishingspots`);
    }
    res.render('fishingspots/edit', { location });
}

module.exports.updateFishingspot = async (req, res) => {
    const { id } = req.params;
    const location = await FishingSpot.findByIdAndUpdate(id, { ...req.body.fishingspot }, { runValidators: true });
    const imgs = req.files.map(f => ({ url: f.path, filename: f.filename }))
    location.images.push(...imgs);
    await location.save();
    if (req.body.deleteImages) {
        for (let filename of req.body.deleteImages) {
            await cloudinary.uploader.destroy(filename);
        }
        await location.updateOne({ $pull: { images: { filename: { $in: req.body.deleteImages } } } })
    }
    req.flash('success', 'Successfully updated campground!');
    res.redirect(`/fishingspots/${location._id}`);
}

module.exports.destroyFishingspot = async (req, res) => {
    const { id } = req.params;
    const location = FishingSpot.findById(id);
    location.longitude = 0;
    location.latitude = 0;
    await FishingSpot.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted campground')
    res.status(303).redirect('/fishingspots');
}