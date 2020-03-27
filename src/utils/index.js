// input must be all numbers
export function addHyphenToMeetingId(input) {
    // pattern of meeting id: /^\d{3}\d{3,4}\d{3,4}$/
    // user can input the by hand 
    // or paste from clipboard
    input += "";
    input = input.replace(/-/g, "").split('');
    let length = input.length;

    if(length <= 3) {
        input = input;
    } else if(length <= 6) {
        input.splice(3, 0, "-");
    } else if(length <= 10) {
        input.splice(3, 0, '-');
        input.splice(7, 0, '-');
    } else if(length <= 11) {
        input.splice(3, 0, '-');
        input.splice(8, 0, '-');
    }
    return input.join("");
}