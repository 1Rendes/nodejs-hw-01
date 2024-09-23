import { writeContacts } from '../utils/writeContacts';

export const removeAllContacts = async () => {
  try {
    await writeContacts(JSON.stringify([]));
  } catch (error) {
    return error.message;
  }
};

removeAllContacts();
