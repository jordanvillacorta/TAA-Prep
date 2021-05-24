Test.assertSimilar(sameVowelGroup(["hoops", "chuff", "bot", "bottom"]), 
["hoops", "bot", "bottom"])
Test.assertSimilar(sameVowelGroup(["crop", "nomnom", "bolo", "yodeller"]), 
["crop", "nomnom", "bolo"])
Test.assertSimilar(sameVowelGroup(["semantic", "aimless", "beautiful", "meatless icecream"]), 
["semantic", "aimless", "meatless icecream"])
Test.assertSimilar(sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]), 
["many"])
Test.assertSimilar(sameVowelGroup(["toe", "ocelot", "maniac"]), ["toe", "ocelot"])
Test.assertSimilar(sameVowelGroup(["a", "apple", "flat", "map", "shark"]), ["a", "flat", "map", "shark"])
Test.assertSimilar(sameVowelGroup(["a", "aa", "ab", "abc", "aaac", "abe"]), ["a", "aa", "ab", "abc", "aaac"])