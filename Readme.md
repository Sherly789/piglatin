#Behavior:
Should add "ay" to end of apple and return appleay
#Input:
apple
#Output:
appleay

#Behavior:
Should add "ay" to the end of any word
#Input:
apricot
#Output:
apricotay

#Behavior:
Test if there is a vowel at the beginning of the word
#Input:
onion
#Output:
true

#Behavior:
Should add "ay" to very end of word for words that begin with a vowel
#Input:
orange
#Output:
orangeay

#Behavior:
Should move first consonant to end of word and add ay to very end if word begins with single consonant
#Input:
dog
#Output:
ogday

#Behavior:
Should move initial y to the end of word and add "ay" to the very end when the word begins with y
#Input:
them
#Output:
emthay

#Behavior:
Should move y with any preceding consonants to the end of the word when the word does not begin with y and y precedes the first vowel
#Input:
dye
#Output:
edyay

#Behavior:
Should move first two consonants to end of word and add ay to very end if word begins with two consonants
#Input:
them
#Output:
emthay

#Behavior:
Should move first three consonants to end of word and add ay to very end if word begins with three consonants
#Input:
three
#Output:
eethray
