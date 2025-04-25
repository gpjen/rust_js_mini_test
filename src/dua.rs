use std::collections::HashMap;

// struct
pub fn belajar_struct() {
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

pub fn pembagian(a: i32, b: i32) -> Result<f32, String> {
    if b == 0 {
        Err("pembagian dengan 0".to_string())
    } else {
        Ok(a as f32 / b as f32)
    }
}

pub fn materi_korelasi_literasi() {
    println!("---> Koleksi & Iterasi");

    // Vec<T> — mirip array tapi bisa grow
    let mut nilai = vec![80, 90, 66];
    nilai.push(77);

    print!("Vec : ");
    for a in &nilai {
        print!("{}, ", a)
    }
    print!("\n");

    println!("vec nilai : {:?}", nilai);
    let tidak_lulus: Vec<_> = nilai.iter().filter(|x| **x < 70).collect();
    let lulus: Vec<_> = nilai.iter().filter(|y| **y >= 70).collect();
    println!("tidak lulus : {:?}", tidak_lulus);
    println!("lulus : {:?}", lulus);

    // HashMap<K, V> — seperti dictionary / associative array
    let mut map = HashMap::new();
    map.insert("alice", 72);
    map.insert("agan", 100);

    for (key, value) in &map {
        println!("{} - {}, ", key, value);
    }

    // Iterasi Functional Style
    let numbers = vec![1, 2, 3, 4, 5, 6, 7];

    let square: Vec<_> = numbers
        .iter()
        .filter(|x| **x % 2 == 1)
        .map(|x| x * 2)
        .collect();

    println!("square : {:?}", square);

    // Contoh 2: Sum pakai fold
    let sum = numbers.iter().fold(0, |a, b| a + b);
    println!("hasil iter fold : {}", sum)

    // Contoh 3: Chaining pada HashMap
}
