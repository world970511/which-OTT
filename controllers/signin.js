export const postSignin = async (req, res) => {
  const { user_id, pwd, name, email } = req.body;
  const user = await UserModel.create({
    user_id,
    pwd,
    name,
    email,
  });
  res.status(200).json({ user });
};

export const getSignin = async (req, res) => {};
