const User = require('../models/User');
module.exports = {
  async store(req, res) {
    const { name, email } = req.body;
    const obj = await User.create({ name, email });

    return res.json(obj);
  },
  async index(req, res) {
    const obj = await User.findByPk(req.params.id);

    return res.json(obj)
  },
  async list(req, res) {
    const obj = await User.findAll();

    return res.json(obj)
  },
  async update(req, res) {
    const obj = await User.update(
      req.body,
      {
        where: { id: req.params.id }
      }
    )
    return res.status(200).json(obj)
  },
  async destroy(req, res) {
    await User.destroy({
      where: { id: req.params.id }
    });
    return res.json({ success: "ok" });
  },

  



   /* async index(req, res){
        const users = await User.findAll();

        return res.json(users);
    },

    async store(req, res){
        const { name, email}= req.body;

        const user = await User.create({ name, email});

        return res.json(user);
    },
    async update(req, res) {
        const obj = await User.update(
          req.body,
          {
            where: { id: req.params.id }
          }
        )
        return res.status(200).json(obj)
      },*/
};