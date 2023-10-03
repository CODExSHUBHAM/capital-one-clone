/* eslint-disable no-undef */


// Database connection

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:Code0014@cluster0.zpcnk5h.mongodb.net/', {
    dbName: 'capital-one',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) :
    console.log('Connected to  database'));



// Schema for Deals

const DealSchema = new mongoose.Schema({

    category: {
        categoryId: Number,
        promotionsCount: Number
    },
    promotionId: {
        type: Number,
        required: true,
    },
    linkCode: {
        type: String,
        required: true,
    },
    supplierLinkCode: {
        type: String,
        required: true,
    },
    supplierTitle: {
        type: String,
        required: true,
    },
    mediaAltText: {
        type: String,
        required: true,
    },
    promotionType: {
        type: String,
        required: true,
    },
    beginDate: {
        type: Date,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    supplierImage: {
        type: String,
        required: true,
    },
    modalImage: {
        type: String,
        required: true,
    },
    discountMessage: {
        type: String,
        required: true,
    },
    masked: {
        type: Boolean,
        required: true,
    },
    ssoOnly: {
        type: String,
        required: true,
    }
});
const Deals = mongoose.model('deals', DealSchema);
Deals.createIndexes();


const productCategories = new mongoose.Schema({

    categoryId: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    subcategory: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    }

});
const Catagories = mongoose.model('catagories', productCategories);
Catagories.createIndexes();

const articles = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    lastModificationDate: {
        type: Date,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    categoryImage: {
        type: String,
        required: true,
    },
    bannerImage: {
        type: String,
        required: true,
    },
    articleKey: {
        type: String,
        required: true,
    },
    visibleDate: {
        type: Date,
        required: true,
    },
    readTime: {
        type: String,
        required: true,
    },
    isFeatured: {
        type: Boolean,
        required: true,
    }

});
const Articles = mongoose.model('articles', articles);
Catagories.createIndexes();

// backend code 

const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

    resp.send("App is Working");
    console.log(resp)

});

// API Endpoints

app.get("/deals", async (req, res) => {
    try {
        const deal = await Deals.find();

        return res.status(200).json({
            success: true,
            count: deal.length,
            data: deal,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
})

app.get("/catagories", async (req, res) => {
    try {
        const catagory = await Catagories.find();

        return res.status(200).json({
            success: true,
            count: catagory.length,
            data: catagory,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
})

app.get("/articles", async (req, res) => {
    try {
        const article = await Articles.find();

        return res.status(200).json({
            success: true,
            count: article.length,
            data: article,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
})

app.listen(5000);