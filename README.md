# 🎶 Catch My Tune


The **Song Analysis** feature of the Catch My Tune application provides a seamless backend process for automatically analyzing songs as soon as they are uploaded to the system. Leveraging **Librosa**, a popular Python library for audio analysis, this feature extracts valuable musical characteristics, including **tempo** and **key**,**loudness**, providing meaningful insights for the user.

Upon uploading a song, the system automatically triggers the analysis pipeline:
- **Tempo Detection**: The tempo of the song is computed using Librosa's beat tracking capabilities, offering users a precise **beats-per-minute (BPM)** measure for the uploaded track.
- **Key Detection**: Using chroma feature extraction, the system approximates the **musical key** of the track. This initial implementation gives a basic understanding of the key, suitable for further refinement.
- **Database Integration**: The analysis results are stored directly in the **PostgreSQL database**, allowing users to access the enriched metadata whenever needed.
-Providing **LUFS-based** loudness data in Catch My Tune enables musicians and producers to ensure consistent audio levels, delivering professional-quality tracks that meet industry standards and enhance the listener experience.
The goal is to provide musicians, producers, and enthusiasts with **immediate insights** into their uploaded music, enhancing their experience and helping them understand their tracks in more detail. This feature aligns with industry best practices for automation, using **Django's backend** to ensure each song is processed effectively, while leveraging Librosa for high-quality analysis.

We are continually looking to improve the analysis, aiming to provide more detailed characteristics in future iterations.


**You can view the live frontend here**: [Catch My Tune Live](https://main.d22mdftw8wj1aj.amplifyapp.com/)

## Screenshots
![FocusFlow Dashboard](/ui-test.png)


## 🛠️ Technologies Used

Catch My Tune leverages the following technologies:

- **React**: For the component-based structure and user interface.
- **Next.js**: Provides SSR (Server-Side Rendering) and dynamic routing, enhancing performance and SEO.
- **TypeScript**: Ensures safer, scalable development with type support.
- **AWS Amplify**: Facilitates quick and easy deployment.
- **Lucide React Icons**: Adds meaningful and aesthetic icons to enrich the user interface.
- **Tailwind CSS**: Enables rapid, consistent styling with flexibility in design.

## 📈 Features
- **Audio File Upload**: Allows users to upload audio files for analysis.
- **Key & Tempo Analysis**: Displays information on key, tempo, and other attributes for each uploaded or linked song.
- **Loudness Analysis** display loudness data in lufs
- **Duration**

## 🔮 Planned Features

To enhance the functionality and user experience, here are some additional features planned for future versions:

- **Detailed Audio Insights**: Adding more in-depth metrics like BPM, genre prediction, and mood analysis to expand the audio insights available.
- **Social Sharing**: Enable users to share their results on social media platforms directly from the app.
- **Mobile Responsiveness**: Optimizing for mobile devices to ensure a smooth experience across all screen sizes.

## 🌐 Deployment

Catch My Tune is deployed on **AWS Amplify**, providing high performance, security, and a reliable user experience. AWS Amplify’s CI/CD integration ensures the application stays up-to-date with the latest changes.

## 📂 Installation & Running Locally

To run the project on your local machine:

1. Clone this repository:
   ```bash
   git clone https://github.com/username/catch-my-tune.git
   cd catch-my-tune
