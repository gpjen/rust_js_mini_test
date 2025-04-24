
pub enum Role {
    Admin,
    Guest,
    Member(String), // bisa punya data juga
}

pub struct User {
    pub name: String,
    pub age: i32,
    pub role: Role,
}

impl User {
    pub fn print_info(&self) {
        match &self.role {
            Role::Admin => println!("Nama : {}, User : {}, Role : Admin", self.name, self.age),
            Role::Guest => println!("Nama : {}, User : {}, Role : Guest", self.name, self.age),
            Role::Member(level) => println!("Nama : {}, User : {}, Role : Member({})", self.name, self.age, level),
        }
    }
}