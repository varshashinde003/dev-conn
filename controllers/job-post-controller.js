import log from "../utils/logger";
import Validator from "../utils/validator";
import errorFormatter from "../utils/error-formatter";
import JobPost from "../models/job-post";
import uniqid from "uniqid";

export const addPost = (req, res) => {
    const user = req.Employer
    const val = new Validator(req.body, {
        title: "required|string",
        company: "required|string",
        contact_name: "required|string",
        contact_email: "required|string",
        expire_on: "required|string",
        experience: "required|string",
        cover_img: "required|string",
        education: "required|string",
        summary: "required|string",
        description: "required|string",
        key_skills: "required|array",
        city: "required|string",
        state: "required|string",
        country: "required|string",
        salary: "required|string",
        job_type: "required|string",
        industry: "required|string",
    });
    return val.check()
        .then(matched => {
            if (!matched) {
                const result = {
                    statusCode: 422,
                    message: "Invalid inputs",
                    errors: errorFormatter(val.errors)
                }
                res.status(result.statusCode);
                return res.json(result);
            } else {
                const { title, company, contact_name, contact_email, expire_on, experience, cover_img, education, summary, description, key_skills, city, state, country, salary, job_type, industry } = req.body;
                const company_id = user.id;
                const slug = `${title.toLowerCase().replace(/ /g, "-")}-${uniqid(10)}`;
                const data = {
                    title, slug, company_id, company, contact_name, contact_email, expire_on, experience, cover_img, education, summary, description, key_skills, city, state, country, salary, job_type, industry
                }
                JobPost.create(data).then(post => {
                    post.save();
                    return res.json(post);
                })
            }
        }).catch(err => errorHandler(err, res));
}

export const getAllPosts = (req, res) => {
    JobPost.find().exec()
        .then(posts => {
            if (posts.length) {
                return res.json(posts);
            } else {
                const result = {
                    statusCode: 404,
                    message: "No posts found"
                }
                res.status(result.statusCode);
                return res.json(result);
            }
        }).catch(err => errorHandler(err, res))
}

export const getPostDetails = (req, res) => {
    const { slug } = req.params;
    return JobPost.findOne({ slug }, { password: 0, "__v": 0 }).exec()
        .then(post => {
            if (post) {
                return res.json(post);
            } else {
                const result = {
                    statusCode: 404,
                    message: "Post not found"
                }
                res.status(result.statusCode);
                return res.json(result);
            }
        }).catch(err => errorHandler(err, res))
}

export const editPost = (req, res) => {
    const company_id = req.Employer.id;
    const { slug } = req.params;
    const { title, company, contact_name, contact_email, expire_on, experience, cover_img, education, summary, description, key_skills, city, state, country, salary, job_type, industry } = req.body;
    const val = new Validator(req.body, {
        title: title ? "string" : "required|string",
        company: company ? "string" : "required|string",
        contact_name: contact_name ? "string" : "required|string",
        contact_email: contact_email ? "string" : "required|string",
        expire_on: expire_on ? "string" : "required|string",
        experience: experience ? "string" : "required|string",
        cover_img: cover_img ? "string" : "required|string",
        education: education ? "string" : "required|string",
        summary: summary ? "string" : "required|string",
        description: description ? "string" : "required|string",
        key_skills: key_skills ? "array" : "required|array",
        city: city ? "string" : "required|string",
        state: state ? "string" : "required|string",
        country: country ? "string" : "required|string",
        salary: salary ? "string" : "required|string",
        job_type: job_type ? "string" : "required|string",
        industry: industry ? "string" : "required|string",
    });
    return val.check()
        .then(matched => {
            if (!matched) {
                const result = {
                    statusCode: 422,
                    message: "Invalid inputs",
                    errors: errorFormatter(val.errors)
                }
                res.status(result.statusCode);
                return res.json(result);
            } else {
                const data = {
                    title, company_id, company, contact_name, contact_email, expire_on, experience, cover_img, education, summary, description, key_skills, city, state, country, salary, job_type, industry
                }
                JobPost.findOneAndUpdate({ slug }, { $set: data }, { useFindAndModify: false, new: true, select: "-__v" }).exec().then(post => {
                    if (post) {
                        post.save();
                        return res.json(post);
                    } else {
                        const result = {
                            statusCode: 404,
                            message: "Not found",
                        }
                        res.status(result.statusCode);
                        return res.json(result);
                    }
                })

            }
        }).catch(err => errorHandler(err, res));
}

export const deletePost = (req, res) => {
    const { id } = req.params;
    return JobPost.findByIdAndRemove(id, { useFindAndModify: false} ).exec()
        .then(post => {
            if (post) {
                const result = {
                    message: "Deleted Successfully",
                }
                return res.json(result);
            } else {
                const result = {
                    statusCode: 404,
                    message: "Not found",
                }
                res.status(result.statusCode);
                return res.json(result);
            }
        })

}

const errorHandler = (err, res) => {
    log.error(err.message);
    const result = {
        statusCode: 500,
        message: process.env.DEBUG === "true" ? err.message : "Something went wrong. Please try again later"
    }
    res.status(result.statusCode);
    return res.json(result);
}