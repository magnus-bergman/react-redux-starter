import users from '../models/users'

export default {
  index (req, res) {
    res.status(200).json({ users })
  },

  me (req, res) {
    res.status(200).json({
      token: req.token,
      user: req.user
    })
  },

  show (req, res) {
    const user = users.findBy('id', req.body.id)

    if (user) {
      res.status(200).json({ user })
    } else {
      res.status(404).json({
        error: {
          message: 'Couldn\'t find what you\'re looking for.'
        }
      })
    }
  },

  update (req, res) {
  },

  create (req, res) {
  },

  destroy (req, res) {
  }
}
