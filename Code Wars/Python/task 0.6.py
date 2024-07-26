def smash(words):
    if not words:
        return ""
    
    sentence = words[0]  
    
    for word in words[1:]:
        sentence += " " + word 
    
    return sentence

