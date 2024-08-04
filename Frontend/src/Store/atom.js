import { atom, selector, selectorFamily } from "recoil";

export const userAtom = atom({
  key: "userAtom",
  default: "",
});

export const settingAtom = atom({
  key: "settingAtom",
  default: false,
});

export const isUserState = selector({
  key: "isUserState",
  get: ({ get }) => {
    const user = get(userAtom);
    return user ? true : false;
  },
});

export const firstNameState = atom({
  key: "firstNameState",
  default: "",
});

export const lastNameState = atom({
  key: "lastNameState",
  default: "",
});

export const emailState = atom({
  key: "emailState",
  default: "",
});

export const passwordState = atom({
  key: "passwordState",
  default: "",
});

export const fullNameState = atom({
    key: "fullNameState",
    default: "",
})

export const messageState = atom({
    key: "messageState",
    default: "",
})

export const formDataState = selectorFamily({
  key: "formDataState",
  get:
    (label) =>
    ({ get }) => {
      const firstName = get(firstNameState);
      const lastName = get(lastNameState);
      const email = get(emailState);
      const password = get(passwordState);
      const fullName = get(fullNameState);
      const message = get(messageState);
      switch (label) {
        case "FirstName":
          return firstName;
        case "LastName":
          return lastName;
        case "Email":
          return email;
        case "Password":
          return password;
        case "Full Name":
          return fullName;
        case 'Register' : 
        return {firstName, lastName, email, password};
        case 'Login':
            return {email, password};
        case 'Send':
            return {fullName, email , message};
        default:
            return {};
      }
    },
  set:
    (label) =>
    ({ set }, newValue) => {
      switch (label) {
        case "FirstName":
          set(firstNameState, newValue);
          break;
        case "LastName":
          set(lastNameState, newValue);
          break;
        case "Email":
          set(emailState, newValue);
          break;
        case "Password":
          set(passwordState, newValue);
          break;
        case "Full Name": 
            set(fullNameState, newValue);
      }
    },
});


export const tokenState = atom({
  key: 'tokenState',
  default: false,
})