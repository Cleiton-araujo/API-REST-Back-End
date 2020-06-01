const User = require('../models/User');
const Livro = require('../models/Livro');

module.exports = {
    async index(req, res) {
        const { user_id} = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'livros'}
        })

        return res.json(user.livros);
    },
    async list(req, res) {
        const obj = await Livro.findAll();
    
        return res.json(obj)
      },

    async store(req, res) {
        const { user_id} = req.params;
        const { name, titulo, autor} = req.body;

        const user = await User.findByPk(user_id);

        if(!user){
            return res.status(400).json({ error: 'User not found'});
        }
        const [livro] = await Livro.findOrCreate({
            where: {name, titulo, autor}
        });

        await user.addLivro(livro);

        return res.json(livro);
    },
    async update(req, res) {
        const obj = await Livro.update(
          req.body,
          {
            where: { id: req.params.id }
          }
        )
        return res.status(200).json(obj)
      },
      async destroy(req, res) {
        await Livro.destroy({
          where: { id: req.params.id }
        });
        return res.json({ success: "ok" });
      },


      
};