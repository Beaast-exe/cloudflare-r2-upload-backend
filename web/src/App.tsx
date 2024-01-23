import axios from 'axios';
import { FormEvent, useState } from 'react';

function App() {
	const [files, setFiles] = useState<FileList | null>(null)
	
	function handleUploadFile(e: FormEvent) {
		e.preventDefault();
		
		if (!files || files.length === 0) return

		const file = files[0];
		const contentType = 'image/jpeg'

		const url = 'https://beaast-apps.73ac65870a5254e68eb7d307a52114d4.r2.cloudflarestorage.com/9d4988eb-38b8-4210-b4d3-aa9826015c9e-marissol.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=51265a6b5267f9fcdbf8ffe56431535d%2F20240123%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20240123T134241Z&X-Amz-Expires=600&X-Amz-Signature=9e47cafb18b5586d453cfeb2e0ae33ccc0c885b816c20d5d0e3a370166a00a5b&X-Amz-SignedHeaders=host&x-id=PutObject';
		axios.put(url, file, {
			headers: {
				'Content-Type': contentType
			}
		});
	}

	return (
		<form onSubmit={handleUploadFile}>
			<input type="file" name="file" onChange={e => setFiles(e.target.files)} />
			<button type="submit">Upload</button>
		</form>
	)
}

export default App