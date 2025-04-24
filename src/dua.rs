
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

pub enum Status {
    Active,
    Inactive,
    Pending,
}

pub fn print_status(stt: Status) {
    match stt {
        Status::Active => println!("Status: Active"),
        Status::Inactive => println!("Status: Inactive"),
        Status::Pending => println!("Status: Pending"),
    }
}

pub fn pembagian(a:i32, b:i32) ->Result<f32, String> {
    if b == 0 {
        Err("pembagian dengan 0".to_string())
    } else {
        Ok(a as f32/b as f32)
    }
}