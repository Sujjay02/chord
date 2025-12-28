function handleTranspose() {
    const type = document.getElementById('typeSelect').value;
    const input = document.getElementById('userInput').value.trim();
    const semitones = parseInt(document.getElementById('semitones').value);
    
    // Create an interval string (e.g., "2s" for 2 semitones)
    const interval = Tonal.Interval.fromSemitones(semitones);
    let result = "";

    try {
        if (type === 'note') {
            result = Tonal.Note.transpose(input, interval);
        } 
        else if (type === 'chord') {
            // Transposes the root while keeping the chord quality (e.g., "m7")
            result = Tonal.Chord.transpose(input, interval);
        } 
        else if (type === 'scale') {
            // Transposes the entire scale (e.g., "C major" -> "D major")
            result = Tonal.Scale.transpose(input, interval);
        }
        
        document.getElementById('resultText').innerText = result || "Invalid Input";
    } catch (error) {
        document.getElementById('resultText').innerText = "Error!";
    }
}
