
// struct 

pub fn belajar_struct(){
    println!("----> struct");

    struct User {
        name: String,
        age: u32,
    }

    let user1 = User {
        name: String::from("John"),
        age: 30,
    };

    println!("Name: {}, Age: {}", user1.name, user1.age);
}