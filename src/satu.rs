// File: /D:/_RUST/hello-rust/src/satu.rs

pub fn basic_varibale() {
    let mut y = 10; // muttable artinya nilainya dapat berubah
    println!("y old: {}", y);
    y = y + 5;
    println!("y: {}", y);

    // Tipe Data Dasar
    let a:i32 = 10;
    let b:f64   = 3.14; 
    let c:bool = true; 
    let d:char = 'G';

    println!("a: {}, b: {}, c: {}, d: {}", a , b, c, d);
}

pub fn control_flow() {
    let x:i32 = 5;
    if x < 10 {
        println!("x kecil {}", x)
    } else {
        println!("x besar {}", x)
    }
}
pub fn test_match() {
    let angka = 10;

    match angka {
        1 => println!("satu"),
        2 => println!("dua"),
        3 => println!("tiga"),
        _ => println!("lainnya")
    }
}

pub fn test_looping(){
    println!("--> function looping");
    for i in 0..5 {
        println!("i = {}", i)
    }

    let mut n = 0;
    while n < 3 {
        println!("n = {}", n);
        n += 1;
    }

    let mut count = 0;
    loop {
        if count == 2 {break;}

        println!("count = {}", count);
        count += 1;
    }
}

pub fn fn_void() {
    println!("fungsi void, tanpa return")
}

pub fn fn_parameter(nama: &str) {
    println!("hello nama saya, {}", nama)
}

pub fn fn_return_tambah(a: i32, b:i32) -> i32 {
    return a + b;
} 

pub fn ownership() {
    println!("----> ownership");

    let s1 = String::from("Hello");
    let s2 = s1;

    // println!("{}", s1); // ERROR: value moved
    println!("s2 : {}", s2);

} 

pub fn borrowing() {
    println!("---> borrowing");

    let s1 = String::from("rust");
    print_str(&s1);
    println!("s1 : {}", s1);

    // Bisa Mutable
    let mut s = String::from("Hello");
    change(&mut s);
    println!("muttable s : {}", s);

}

fn change(s: &mut String) {
    s.push_str(", word");
    s.push_str("!!!");
}

fn print_str(s: &String) {
    println!("Borrowed : {}", s)
}

pub fn lifetime() {
    // println!("---> lifetime");

    // let r;
    // {
        // let x = 5;
        // // r = &x; ❌ error: `x` doesn't live long enough
    // }

    // println!("r: {}", r);

} 