export default (model, pageString, perPage = 10, key = 'data', criteria = {}, sort = { createdAt: -1 }) => new Promise((resolve, reject) => {
  const pageNumber = parseInt(pageString)
  const page = (pageNumber && !isNaN(pageNumber) && pageNumber > 0) ? pageNumber - 1 : 0

  model.find(criteria, { __v: false })
    .sort(sort)
    .limit(perPage)
    .skip(perPage * page)
    .exec()
    .then(data => {
      model.countDocuments()
        .exec()
        .then(count => {
          resolve({
            page: page + 1,
            pages: Math.ceil(count / perPage),
            [key]: data
          })
        })
    })
    .catch(e => {
      reject(e)
    })
})
