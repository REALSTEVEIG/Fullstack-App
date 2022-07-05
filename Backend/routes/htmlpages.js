const express = require('express')

const router = express.Router()

const {index, about, blog_list, contact, contactSend, product, testimonial, indexNewsletter} = require('../controllers/htmlpages')

router.route('/index').get(index)
router.route('/newsletter').post(indexNewsletter)
router.route('/about').get(about)
router.route('/blog_list').get(blog_list)
router.route('/contact').get(contact)
router.route('/contact_send').post(contactSend)
router.route('/product').get(product)
router.route('/testimonial').get(testimonial)

module.exports = router