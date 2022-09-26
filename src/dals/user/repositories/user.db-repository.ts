import { hashPassword } from 'common/helpers';
import { getUserContext } from '../user.context';
import { User } from '../user.model';
import { UserRepository } from './user.repository';

export const dbRepository: UserRepository = {
  getUserByEmailAndPassword: async (email: string, password: string) => {
    const user = await getUserContext().findOne({
      email,
    });

    const hashedPassword = await hashPassword(password, user?.salt);
    return user?.password === hashedPassword
      ? ({
          _id: user._id,
          email: user.email,
          role: user.role,
        } as User)
      : null;
  },
};
