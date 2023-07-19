# CRS-App (React Native) - Senior Design Project

Mission: Mobile App to educate farmers in Guatemala on how to utilize their land and crops (resource page, weather page, SMS texting, FQA, etc)

*Will need Expo Go to run application

**Resources and Materials**

PDFs are available but no videos will be uploaded to the GitHub due to being too large to upload.

<br>

**Dependencies to Install**

npm install react-navigation

npm install react-navigation-stack

npm install react-native-gesture-handler@2.1.1

npm install react-navigation/native-stack

(not necessary)react-native link react-native-gesture-handler (Errors will pop up saying that it probably didn't work but just do it just in case)

<br>

**After starting the app**

press 'd' for developer tools, then press 'tunnel' in the new window that pops up

WAIT for Tunnel ready

<br>

**Future Recommendations**

- Collapse the FAQ categories so that the topics are seen and then users can tap on the topic title to expand to each question and then expand to the answer when tapped on or show the topic title and questions and then tap to expand the answers

- Find the right APIs that don't break the PDF and Video Viewer feature. Don't use react-native-pdf or anything that has util or blob in the name until you research everything about it because it broke for us about some watchman error. This made us restart from scratch several times. Focus on either the PDF or Video first and then work on the other when it works or work on it separately. Don't code all at once without testing every once in a while.

- Font size increaser/decreaser in the settings

- Color changer in the settings? Perhaps for light/dark mode or for better viewing for the color blind?

- Spanish to English toggle translator? This idea might be shot down since the app will be based out of Chiquimula. If it does get shot down, be sure to check that all of the Spanish is right

- Good luck with the weather screen. Work on getting the information on the screen to pop up properly. What currently doesn't work is the temperature, low temperature, high temperature, rain and humidity. Ask Hoa for how she coded this portion if you need a better understanding of it.

- A five day forecast for the weather screen might be asked of you as we got some criticism for the weather showing just the current moment the infomration was pulled. The Open Weather Map link used is a five day forecast.

- Have someone make an API Key for Open Weather Map to be used for the app as the one used in the app is Hoa's and she is unsure if others can access it in the future.
