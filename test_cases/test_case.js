const testcases = {
    description: '@createUser - Testcases endpoint for Get Users',
    positive: {
        case1: '@testid01 - Test apakah dengan menggunakan data user id yang valid akan berhasil menampilkan data?'
        // case2: '@testid04 - Test apakah endpoint create user berfungsi membuat data user dengan data yang berasal dari file ekstensi .json',
        // case3: '@testid05 - Test apakah endpoint create user berfungsi membuat data user dengan validasi bahwa datanya eksis dari endpoint getUser'
    },
    negative: {
        case1: '@testid02 - tampilka pesan error ketika id yang diinputkan tidak valid ?'
        // case2: '@testid02 - Test apakah endpoint create user berfungsi membuat data user dengan hobi ada isinya tp angka',
    }
};

module.exports = {
    testcases,
};