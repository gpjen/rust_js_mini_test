mod satu;
mod dua;
mod tiga;
mod kalkulator;

use kalkulator::operation::{bagi, kali, kurang, tambah};


fn main() {

    // learning 1
    println!("Hello, world!");

    // Variabel & Immutability
    let x = 10; // default dan tidak bisa di rubah
    println!("x: {}", x);

    satu::basic_varibale(); 

    // Control Flow
    satu::control_flow();
    println!("x diluar: {}", x);

    // match (kayak switch di bahasa lain)
    satu::test_match();

    // Looping
    satu::test_looping();

    // Fungsi void, paramter, return
    satu::fn_void();
    satu::fn_parameter("agan");
    println!("hasil 5 + 5 = {}", satu::fn_return_tambah(5, 5));

    // Ownership
    satu::ownership();

    // Borrowing 
    satu::borrowing();

    // Lifetime – Seberapa lama pinjaman valid?
    satu::lifetime();

    // Struct
    dua::belajar_struct();

    // enum
    println!("---> enum");
    let mut status:dua::Status  = dua::Status::Pending;
    dua::print_status(status);
    status = dua::Status::Active;
    dua::print_status(status);
    status = dua::Status::Inactive;
    dua::print_status(status);

    // error handling
    match dua::pembagian(10, 3) {
        Ok(hasil) => println!("Hasil : {}", hasil ),
        Err(error) => println!("error : {}", error),
    }

    match dua::pembagian(10, 0) {
        Ok(hasil) => println!("Hasil : {}", hasil ),
        Err(error) => println!("error : {}", error),
    }

    // intermetiete Struct dan Enum
    println!("---> intermediete Struct Enum");

    let us_admin = tiga::User{
        name: String::from("Admin"),
        age: 20,
        role: tiga::Role::Admin
    };

    let us_user = tiga::User{
        name: "Guest".to_string(),
        age:17,
        role: tiga::Role::Guest,
    };

    let us_member_gold = tiga::User {
        name: "Member Gold".to_owned(),
        age: 23,
        role: tiga::Role::Member("Gold".to_owned()),
    };
    
    us_admin.print_info();
    us_user.print_info();
    us_member_gold.print_info();

    // Modularisasi dengan mod, use, dan pub
    println!("Hasil 5 + 8 = {}", tambah(5, 8));
    println!("Hasil 5 - 8 = {}", kurang(5, 8));
    println!("Hasil 5 x 8 = {}", kali(5, 8));
    println!("Hasil 5 / 8 = {}", bagi(5, 8));

    // Koleksi & Iterasi
    dua::materi_korelasi_literasi();

}
