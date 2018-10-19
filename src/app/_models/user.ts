export class User {
  firstname?: string;
  lastname?: string;
  local:Local
  constructor(firstname, lastname, username, password, email) {
    this.firstname = firstname;
    this.lastname = lastname;

    let local = new Local();
    local.username = username;
    local.password = password;
    local.email = email;
    this.local = local;
  }
}

class Local {
  username: string;
  password: string;
  email: string;
}