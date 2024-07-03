import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GameCard from '../components/GameCard';

// Sample data for the games
const games = [
  { id: '1', title: 'The Legend of Zelda: Breath of the Wild', description: 'An epic open-world adventure game where you explore the vast kingdom of Hyrule.', imageUrl: 'https://imgs.search.brave.com/uAsxBHrC1YBjCzFkuKuQuHDEdfJNQMsZ2m6xH3Ywkes/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFmNE91eHdXQUwu/anBn' },
  { id: '2', title: 'Super Mario Odyssey', description: 'Join Mario on a globe-trotting 3D adventure to rescue Princess Peach from Bowser.', imageUrl: 'https://imgs.search.brave.com/FWasAaAiJkQRWmcrXsdgOBL82dohdHfULprDgBKluAA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMxLmlnbmltZ3Mu/Y29tLzIwMTcvMDkv/MDEvc3VwZXItbWFy/aW8tb2R5c3NleS1i/dXR0b24tZmluLTE1/MDQyMjU3MTUzMjIu/anBnP3dpZHRoPTMw/MCZjcm9wPTE6MSxz/bWFydCZhdXRvPXdl/YnA' },
  { id: '3', title: 'Minecraft', description: 'A sandbox game where you can build, explore, and create your own world with endless possibilities.', imageUrl: 'https://imgs.search.brave.com/nCSO3Z2w7S0M1x-oj3buiMZ68ksL2TAgj1jPRvC_o6o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzE0Lzg5LzQw/LzM2MF9GXzcxNDg5/NDA4MF9LWmJKeERO/ZnBsYXNwR085ZjFo/SFJnR1Z6SjJxTUdw/bi5qcGc' },
  { id: '4', title: 'Fortnite', description: 'A battle royale game where you fight to be the last one standing on an ever-shrinking island.', imageUrl: 'https://imgs.search.brave.com/SbScFXo6ln8L8mi1cui4RdAlv-SdIRRQhUmptu4wHbI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NkL2Nl/L2JkL2NkY2ViZGJm/OThiYWUxM2E3NTJl/NDhmOTUxNzRmZDlk/LmpwZw' },
  { id: '5', title: 'The Witcher 3: Wild Hunt', description: 'An immersive RPG where you play as Geralt of Rivia, a monster hunter on a quest to find his adopted daughter.', imageUrl: 'https://imgs.search.brave.com/OHdY4YpbfRDeypyp7T-1zLwjAA0OOE0woIJnnxnvmkY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvdGhlLXdpdGNo/ZXItcGljdHVyZXMt/NGloNjk3c2Z0Y2p0/d3MxYi5qcGc' },
  { id: '6', title: 'Red Dead Redemption 2', description: 'An action-adventure game set in the Wild West, where you follow the story of outlaw Arthur Morgan.', imageUrl: 'https://imgs.search.brave.com/WGtbC6pRgLKnrM3lwMeYsurDIChCBdlQ7QDdke0AO9U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzJ2/RGlBWnhxVnZXUFBU/SkhxZ0VrNlUtMzIw/LTgwLmpwZw' },
  { id: '7', title: 'Horizon Zero Dawn', description: 'A post-apocalyptic RPG where you play as Aloy, a hunter in a world overrun by robotic creatures.', imageUrl: 'https://imgs.search.brave.com/_cBcdTmggYBXLQe--P7ZhqFScdnDGcEI5-PhtyL6W4c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1tWXlOMlJp/WVRrdE9XSm1aUzAw/TkdNM0xXSTFaVGt0/TnpSalpUSTBOVGho/TjJVd1hrRXlYa0Zx/Y0dkZVFYVnlPRGs0/T1RjM01UWUAuanBn' },
  { id: '8', title: 'Overwatch', description: 'A team-based multiplayer shooter with unique heroes, each with their own abilities and playstyles.', imageUrl: 'https://imgs.search.brave.com/DJ5zjPZWMGVsbeOB4yTAS3vHrpteRDb-STnoGjq6OxE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvb3ZlcndhdGNo/LXBpY3R1cmVzLWRw/YWNtZzVxazNhYmk3/cW4uanBn' },
  { id: '9', title: 'Cyberpunk 2077', description: 'An open-world RPG set in a dystopian future, where you navigate the dangerous streets of Night City.', imageUrl: 'https://imgs.search.brave.com/iq1kRirvuqL39Mml6zMt6BE4xtT6iIS6gADopiKr3MI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2UyL2Jk/LzBjL2UyYmQwY2Yy/Nzg4Y2E3NzUwOTNl/N2U5ZmVhNDdkMDlj/LmpwZw' },
  { id: '10', title: 'Animal Crossing: New Horizons', description: 'A life simulation game where you create your own island paradise and interact with anthropomorphic animals.', imageUrl: 'https://imgs.search.brave.com/fDfG68EByfgsXcj71O_6CfUvMgZ1NIaFIxAicyVOTuo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9hbmlt/YWwtY3Jvc3Npbmct/bmV3LWhvcml6b25z/LTE1ODQ3MDAxNjAu/cG5nP3Jlc2l6ZT05/ODA6Kg' },
];

const HomeScreen = ({ navigation }) => {
  // State to store the current list of games to display
  const [data, setData] = useState([]);
  // State to keep track of the current page for pagination
  const [page, setPage] = useState(1);

  // useEffect hook to fetch data when the component mounts or page changes
  useEffect(() => {
    const fetchData = () => {
      // Calculate the start and end indices for slicing the games array
      const start = (page - 1) * 10;
      const end = start + 10;
      // Append new games to the current data
      setData([...data, ...games.slice(start, end)]);
    };
    fetchData();
  }, [page]); // Dependency array includes 'page' to re-run effect on page change

  return (
    // Container view for the screen
    <View style={styles.container}>
      {/* FlatList component to render a list of game cards */}
      <FlatList
        data={data} // Data source for the list
        keyExtractor={(item) => item.id} // Key extractor for each item
        renderItem={({ item }) => (
          // Render a GameCard for each item in the list
          <GameCard game={item} onPress={() => navigation.navigate('GameDetail', { game: item })} />
        )}
        onEndReached={() => setPage(page + 1)} // Load more data when end of list is reached
        onEndReachedThreshold={0.5} // Threshold for triggering onEndReached
      />
    </View>
  );
};

// Stylesheet for the component
const styles = StyleSheet.create({
  container: {
    flex: 1.2, // Flex to take full available space
    padding: 15, // Padding inside the container
  },
});

export default HomeScreen;
