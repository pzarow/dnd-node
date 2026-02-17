We are preparing an application for the Chinese market. One of its features is distributing red envelopes to a specific group of users. In Chinese culture, the number 8 is considered lucky, while 4 is seen as unlucky.

Complete the function that calculates the maximum number of users who can receive a lucky number of envelopes, ensuring that no user receives an unlucky number. Each user must receive at least one envelope. If it is not possible to assign at least one envelope to every user or if any user would receive an unlucky number, the function should return -1.

Each user must receive at least one envelope. Nobody should receive 4 envelopes - if it's impossible, then function should return -1. All envelopes must be distributed.

You will find the relevant code in /src/envelope.service.ts. Verify your solution by running "yarn test".