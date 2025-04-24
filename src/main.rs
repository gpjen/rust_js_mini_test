mod satu;
mod dua;

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

}
