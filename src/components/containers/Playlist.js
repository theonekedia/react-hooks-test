import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../PlaylistItems';
import Noghtmode from '../Nightmode';

const Playlist = props => {
	return (
		<>
		<Nightmode />
		<PlaylistHeader />
		<PlaylistItems />
		</>
	)
}

export default Playlist;