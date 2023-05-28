const categoryModel = require('../models/categoryModel')
const formidable = require('formidable')
class categoryController {
    add_category = async(req, res) => {
        const form = formidable()
        form.parse(req, async(err, fields, files)=>{
            console.log(files)
            console.log(fields)

        })
    }
    get_category = async(req, res) =>{
        console.log('olj')
    }
}

module.exports = new categoryController()