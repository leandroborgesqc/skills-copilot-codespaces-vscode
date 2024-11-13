function skillsMember() {
    return {
        getSkills: async (req, res) => {
            try {
                const skills = await Skills.findAll();
                res.status(200).json(skills);
            } catch (error) {
                res.status(500).json(error);
            }
        },
        getSkillsById: async (req, res) => {
            try {
                const skills = await Skills.findOne({
                    where: {
                        id: req.params.id
                    }
                });
                res.status(200).json(skills);
            } catch (error) {
                res.status(500).json(error);
            }
        },
        createSkills: async (req, res) => {
            try {
                const skills = await Skills.create(req.body);
                res.status(200).json(skills);
            } catch (error) {
                res.status(500).json(error);
            }
        },
        updateSkills: async (req, res) => {
            try {
                const skills = await Skills.update(req.body, {
                    where: {
                        id: req.params.id
                    }
                });
                res.status(200).json(skills);
            } catch (error) {
                res.status(500).json(error);
            }
        },
        deleteSkills: async (req, res) => {
            try {
                const skills = await Skills.destroy({
                    where: {
                        id: req.params.id
                    }
                });
                res.status(200).json(skills);
            } catch (error) {
                res.status(500).json(error);
            }
        }
    }
}