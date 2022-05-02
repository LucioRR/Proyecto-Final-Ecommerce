const {User, Image} = require('../../database/models')


module.exports = {
    index: async (req, res) => {
        try {
            let allUsers = await User.findAll({include: {all: true}});
            let lastUser = await User.findAll({order: [['id', 'DESC']], limit: 1});

            return res.status(200).json({
                count: allUsers.length,
                users: allUsers.map(user => Object({
                    id: user.id,
                    email: user.email,
                    detail: 'localhost:3000/api/users/' + user.id,
                    })
                ),
                lastUser: lastUser
            }
            );
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    },
    show: async (req, res) => {
        try {
            let user = await User.findByPk(req.params.id, {include: {all: true}});

            return res.status(200).json({
                id: user.id,
                email: user.email,
                avatar: user.avatar_id.url,
                active: user.active
            })
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }
}