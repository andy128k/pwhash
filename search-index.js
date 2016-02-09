var searchIndex = {};
searchIndex['pwhash'] = {"items":[[0,"","pwhash","A collection of password hashing and verification routines.",null,null],[3,"HashSetup","","Setup struct for basic hashing customization.",null,null],[12,"salt","","Custom salt.",0,null],[12,"rounds","","Number of rounds.",0,null],[0,"error","","Error values.",null,null],[4,"Error","pwhash::error","Possible errors.",null,null],[13,"Io","","The system entropy source couldn't be opened.",1,null],[13,"EncodingError","","Some component of the hash string contains an invalid character.",1,null],[13,"InsufficientLength","","An encoded value is too short.",1,null],[13,"InvalidRounds","","The number of rounds is out of range.",1,null],[13,"InvalidHashString","","The hash string is not in the expected format.",1,null],[11,"fmt","","",1,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",1,{"inputs":[{"name":"error"}],"output":{"name":"str"}}],[11,"cause","","",1,{"inputs":[{"name":"error"}],"output":{"name":"option"}}],[11,"from","","",1,{"inputs":[{"name":"error"},{"name":"error"}],"output":{"name":"error"}}],[0,"unix_crypt","pwhash","Seventh Edition Unix DES-based hash.",null,null],[5,"hash","pwhash::unix_crypt","Hash a password with a randomly generated salt.",null,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[5,"hash_with","","Hash a password with a user-provided salt.",null,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"name":"result"}}],[5,"verify","","Verify that the hash corresponds to a password.",null,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"name":"bool"}}],[17,"SALT_LEN","","Salt length.",null,null],[0,"bsdi_crypt","pwhash","Enhanced DES-based hash.",null,null],[5,"hash","pwhash::bsdi_crypt","Hash a password with a randomly generated salt and the default\nnumber of rounds.",null,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[5,"hash_with","","Hash a password with user-provided parameters.",null,{"inputs":[{"name":"ihs"},{"name":"str"}],"output":{"name":"result"}}],[5,"verify","","Verify that the hash corresponds to a password.",null,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"name":"bool"}}],[17,"DEFAULT_ROUNDS","","Default number of rounds.",null,null],[17,"SALT_LEN","","Salt length.",null,null],[0,"bcrypt","pwhash","Standard *BSD hash.",null,null],[3,"BcryptSetup","pwhash::bcrypt","Setup struct for bcrypt.",null,null],[12,"salt","","Custom salt.",2,null],[12,"cost","","Custom cost.",2,null],[12,"variant","","Algorithm variant.",2,null],[4,"BcryptVariant","","Identifiers of algorithm variants which can be produced.",null,null],[13,"V2a","","Second OpenBSD variant, fixed repeated string hashing.",3,null],[13,"V2b","","Third OpenBSD variant, fixed a wraparound bug.",3,null],[13,"V2y","","Openwall variant, fixed a sign extension bug.",3,null],[5,"hash","","Hash a password with a randomly generated salt, default cost,\nand default variant.",null,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[5,"hash_with","","Hash a password with user-provided parameters.",null,{"inputs":[{"name":"ibs"},{"name":"str"}],"output":{"name":"result"}}],[5,"verify","","Verify that the hash corresponds to a password.",null,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"name":"bool"}}],[17,"MIN_COST","","Minimum cost.",null,null],[17,"MAX_COST","","Maximum cost.",null,null],[17,"DEFAULT_COST","","Default cost.",null,null],[8,"IntoBcryptSetup","","A trait for converting a type into a `BcryptSetup` struct.",null,null],[10,"into_bcrypt_setup","","The conversion function.",4,{"inputs":[{"name":"intobcryptsetup"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"bcryptvariant"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"into_bcrypt_setup","pwhash","",0,{"inputs":[{"name":"hashsetup"}],"output":{"name":"result"}}],[11,"into_bcrypt_setup","pwhash::bcrypt","",2,{"inputs":[{"name":"bcryptsetup"}],"output":{"name":"result"}}],[11,"default","","",2,{"inputs":[{"name":"bcryptsetup"}],"output":{"name":"self"}}],[0,"sha1_crypt","pwhash","HMAC-SHA1 based hash.",null,null],[5,"hash","pwhash::sha1_crypt","Hash a password with a randomly generated salt and the default\nnumber of rounds (varied by a small amount, like on NetBSD).",null,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[5,"hash_with","","Hash a password with user-provided parameters.",null,{"inputs":[{"name":"ihs"},{"name":"str"}],"output":{"name":"result"}}],[5,"verify","","Verify that the hash corresponds to a password.",null,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"name":"bool"}}],[17,"DEFAULT_ROUNDS","","Default number of rounds.",null,null],[17,"DEFAULT_SALT_LEN","","Default salt length.",null,null],[0,"md5_crypt","pwhash","MD5 based hash.",null,null],[5,"hash","pwhash::md5_crypt","Hash a password with a randomly generated salt.",null,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[5,"hash_with","","Hash a password with user-provided parameters.",null,{"inputs":[{"name":"ihs"},{"name":"str"}],"output":{"name":"result"}}],[5,"verify","","Verify that the hash corresponds to a password.",null,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"name":"bool"}}],[17,"MAX_SALT_LEN","","Maximium salt length.",null,null],[0,"sha256_crypt","pwhash","SHA-256 based hash.",null,null],[5,"hash","pwhash::sha256_crypt","Hash a password with a randomly generated salt and the default\nnumber of rounds.",null,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[5,"hash_with","","Hash a password with user-provided parameters.",null,{"inputs":[{"name":"ihs"},{"name":"str"}],"output":{"name":"result"}}],[5,"verify","","Verify that the hash corresponds to a password.",null,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"name":"bool"}}],[17,"MIN_ROUNDS","","Minimum rounds.",null,null],[17,"MAX_ROUNDS","","Maximum rounds.",null,null],[17,"DEFAULT_ROUNDS","","Default number of rounds.",null,null],[17,"MAX_SALT_LEN","","Maximum (and default) salt length.",null,null],[0,"sha512_crypt","pwhash","SHA-512 based hash.",null,null],[5,"hash","pwhash::sha512_crypt","Hash a password with a randomly generated salt and the default\nnumber of rounds.",null,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[5,"hash_with","","Hash a password with user-provided parameters.",null,{"inputs":[{"name":"ihs"},{"name":"str"}],"output":{"name":"result"}}],[5,"verify","","Verify that the hash corresponds to a password.",null,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"name":"bool"}}],[17,"MIN_ROUNDS","","Minimum rounds.",null,null],[17,"MAX_ROUNDS","","Maximum rounds.",null,null],[17,"DEFAULT_ROUNDS","","Default number of rounds.",null,null],[17,"MAX_SALT_LEN","","Maximum (and default) salt length.",null,null],[0,"unix","pwhash","Convenience functions for Unix modular hashes.",null,null],[5,"crypt","pwhash::unix","A Unix __crypt__(3) work-alike.",null,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"name":"result"}}],[5,"verify","","Verify that the hash corresponds to a password, using hash format recognition.",null,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"name":"bool"}}],[6,"Result","pwhash","Type alias for the Result type.",null,null],[8,"IntoHashSetup","","A trait for converting a type into a `HashSetup` struct.",null,null],[10,"into_hash_setup","","The conversion function.",5,null],[11,"into_hash_setup","","",0,null]],"paths":[[3,"HashSetup"],[4,"Error"],[3,"BcryptSetup"],[4,"BcryptVariant"],[8,"IntoBcryptSetup"],[8,"IntoHashSetup"]]};
initSearch(searchIndex);
