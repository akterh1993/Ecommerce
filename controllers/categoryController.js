const categoryModel = require('../models/categoryModel')
const cloudinary = require('cloudinary').v2
const formidable = require('formidable')
const { responseReturn} = require('../utils/response')
class categoryController {
    add_category = async(req, res) => {
        const form = formidable()
        form.parse(req, async(err, fields, files)=>{
           if (err) {
            responseReturn(res, 404, {error: 'Somthing Error'})
           } else {
            let {name} = fields
            let {image} = files
            name = name.trim()
            const slug = name.split(' ').join('-')

            cloudinary.config({
                CLOUD_NAME : process.env.CLOUD_NAME,
                CLOUD_API_KEY : process.env.CLOUD_API_KEY,
                CLOUD_API_SECRET :process.env.CLOUD_API_SECRET,
                secure : true
            })

            try {
                const result = await cloudinary.uploder.upload(image.filepath, {folder: 'categories'})
                if (result) {
                    const category = await categoryModel.create({
                        name,
                        slug,
                        image: result.url
                    })
                    responseReturn(res, 201, {category, message: 'Category Add Success'})
                } else {
                    responseReturn(res, 404, {error: 'Image Upload Faield'})
                }
            } catch (error) {
                responseReturn(res, 500, {error: 'Internal server error'})
            }
            
           }

        })
    }
    get_category = async(req, res) =>{
        console.log('olj')
    }
}

module.exports = new categoryController()