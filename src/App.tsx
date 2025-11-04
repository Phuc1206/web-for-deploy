import React from "react";
import "./App.scss";

const ImageCard = ({
	src,
	alt,
	title,
}: {
	src: string;
	alt: string;
	title: string;
}) => {
	return (
		<div className="card image-card">
			<img
				src={src}
				alt={alt}
				onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
					(e.currentTarget as HTMLImageElement).src =
						"https://placehold.co/600x400/ff4444/ffffff?text=Loi+Tai+Anh";
				}}
			/>
			<h3>{title}</h3>
		</div>
	);
};

const VideoCard = ({ poster, title }: { poster: string; title: string }) => {
	return (
		<div className="card video-card">
			<video controls poster={poster}>
				Trình duyệt không hỗ trợ video
			</video>
			<h3>{title}</h3>
		</div>
	);
};

const App = () => {
	const images = [
		{
			id: 1,
			src: "../public/z7189574936612_4dd31dfeeee96b05ea6d470241f70030.jpg",
			alt: "Ảnh 1",
			title: "Ảnh 1",
		},
		{
			id: 2,
			src: "../public/z7189575456383_7a87d8930999cc0d7cb101308963831f.jpg",
			alt: "Ảnh 2",
			title: "Ảnh 2",
		},
		{
			id: 3,
			src: "../public/z7189575816695_88c88f46659565e6d4f7ccd05b7e2722.jpg",
			alt: "Ảnh 3",
			title: "Ảnh 3",
		},
		{
			id: 4,
			src: "../public/z7189576388186_c1bb41e17d854aaf12670e1ae80f7157.jpg",
			alt: "Ảnh 4",
			title: "Ảnh 4",
		},
		{
			id: 5,
			src: "../public/z7189577540871_6db7161a9192f866ac2e409725890bd7.jpg",
			alt: "Ảnh 5",
			title: "Ảnh 5",
		},
		{
			id: 6,
			src: "../public/z7189577835700_6efe49225fef30d35028b353c2cfcd59.jpg",
			alt: "Ảnh 6",
			title: "Ảnh 6",
		},
	];

	const videos = [
		{
			id: 1,
			poster: "../public/7189576960052.mp4",
			title: "Video 1",
		},
		{
			id: 2,
			poster: "../public/7189576660871.mp4",
			title: "Video 2",
		},
		{
			id: 3,
			poster: "../public/7189576960052.mp4",
			title: "Video 3",
		},
	];

	return (
		<div className="app-container">
			<header>
				<h1>Xin chào quý khách demo</h1>
			</header>

			<main>
				<section>
					<h2>Thư Viện Hình Ảnh</h2>
					<div className="grid">
						{images.map((i) => (
							<ImageCard key={i.id} src={i.src} alt={i.alt} title={i.title} />
						))}
					</div>
				</section>

				<section>
					<h2>Thư Viện Video</h2>
					<div className="grid">
						{videos.map((v) => (
							<VideoCard key={v.id} poster={v.poster} title={v.title} />
						))}
					</div>
				</section>
			</main>

			<footer>
				<p>© {new Date().getFullYear()} VinaSciTech — All rights reserved.</p>
			</footer>
		</div>
	);
};

export default App;
