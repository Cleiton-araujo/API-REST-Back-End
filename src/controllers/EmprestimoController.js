const User = require('../models/User');
const Emprestimo = require('../models/Emprestimo');

module.exports = {
    async index(req, res) {
        const { user_id} = req.params;

        const user = await User.findByPk(user_id,  {
            include: { association: 'emprestimos' }
        });


        return res.json(user);
    },

    async store(req, res) {
        const { user_id} = req.params;
        const { matricula, email, devolução} = req.body;

        const user = await User.findByPk(user_id);

        if(!user){
            return res.status(400).json({ error: 'User not found'});
        }

        const emprestimo = await Emprestimo.create({
            matricula,
            email,
            devolução,
            user_id,
        });
        return res.json(emprestimo);
    },
    async list(req, res) {
        const obj = await Emprestimo.findAll();
    
        return res.json(obj)
      },
      async update(req, res) {
        const obj = await Emprestimo.update(
          req.body,
          {
            where: { id: req.params.id }
          }
        )
        return res.status(200).json(obj)
      },
      async destroy(req, res) {
        await Emprestimo.destroy({
          where: { id: req.params.id }
        });
        return res.json({ success: "ok" });
      },

};