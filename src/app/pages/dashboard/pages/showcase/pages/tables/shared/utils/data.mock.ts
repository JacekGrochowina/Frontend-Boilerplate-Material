import { IDataItem } from './data-item.interface';
import { faker } from '@faker-js/faker';

const createRandomItems = (): IDataItem[] => {
  const randomItems: IDataItem[] = [];

  for (let i = 0; i < 10; i++) {
    randomItems.push({
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      vehicle: faker.vehicle.vehicle(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past()
    });
  }

  return randomItems;
};

export const DATA_MOCK = createRandomItems();
