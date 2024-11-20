const { convertTimeToWords } = require("./index");

describe("Time to words", () => {
  it("Handles midnight", () => {
    const timeInWords = convertTimeToWords("0:00");
    expect(timeInWords).toBe("midnight");
  });

  it("Handles 30 - 8:30", () => {
    const timeInWords = convertTimeToWords("8:30");
    expect(timeInWords).toBe("half past eight");
  });

  it("Handles times after 30 mins - 2:45", () => {
    const timeInWords = convertTimeToWords("2:45");
    expect(timeInWords).toBe("quarter to three");
  });

  //27
  it("Handles times after 27 mins - 2:27", () => {
    const timeInWords = convertTimeToWords("2:27");
    expect(timeInWords).toBe("twenty-seven past two");
  });

  //32
  it("Handles times after 32 mins - 2:32", () => {
    const timeInWords = convertTimeToWords("2:32");
    expect(timeInWords).toBe("twenty-eight to three");
  });
});
