import "@testing-library/jest-dom";

jest.mock("gsap", () => {
    const actualGsap = jest.requireActual("gsap"); 
    return {
      ...actualGsap,
      to: jest.fn(),
      from: jest.fn(),
      fromTo: jest.fn(),
      timeline: jest.fn(() => ({
        to: jest.fn(),
        from: jest.fn(),
        fromTo: jest.fn(),
        add: jest.fn(),
        play: jest.fn(),
        pause: jest.fn(),
      })),
      context: jest.fn((callback) => {
        const ctx = {
          add: jest.fn(),
          remove: jest.fn(),
          clear: jest.fn(),
        };
        callback(); // Wykonaj przekazany callback
        return ctx;
      }),
    };
  });
  