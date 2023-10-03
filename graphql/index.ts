export const getUserQuery = `
  query getUser($email: String) {
    getUser(by: {email: $email}) {
      id
      name
      email
      avatarUrl
      description
      githubUrl
      linkedinUrl
    }
  }
`;

export const createUserMutation = `
  mutation CreateUser($input: UserCreateInput!) {
    userCreate(input: $input) {
      user {
        id
        name
        email
        avatarUrl
        description
        githubUrl
        linkedinUrl
      }
    }
  }
`;
