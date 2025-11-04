import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpg";
import img6 from "./assets/6.jpg";
import v1 from "./assets/1.mp4";
import v2 from "./assets/2.mp4";
import v3 from "./assets/3.mp4";
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

const VideoCard = ({
	poster,
	src,
	title,
}: {
	poster: string;
	src: string;
	title: string;
}) => {
	return (
		<div className="card video-card">
			<video controls poster={poster}>
				<source src={src} type="video/mp4" />
				Trình duyệt không hỗ trợ video
			</video>
			<h3>{title}</h3>
		</div>
	);
};

const App = () => {
	const images: { id: number; src: string; alt: string; title: string }[] = [
		{
			id: 1,
			src: img1,
			alt: "Chanh dây",
			title: "Chanh dây",
		},
		{
			id: 2,
			src: img2,
			alt: "Cuộc thi chanh dây",
			title: "Cuộc thi chanh dây",
		},
		{
			id: 3,
			src: img3,
			alt: "Passion Rose chuỗi giá trị chanh dây tuần hoàn",
			title: "Passion Rose chuỗi giá trị chanh dây tuần hoàn",
		},
		{
			id: 4,
			src: img4,
			alt: "Trứng gà thảo dược",
			title: "Trứng gà thảo dược",
		},
		{
			id: 5,
			src: img5,
			alt: "Trang trại gà thảo dược",
			title: "Trang trại gà thảo dược",
		},
		{
			id: 6,
			src: img6,
			alt: "Vinh danh trứng gà Organic",
			title: "Vinh danh trứng gà Organic",
		},
	];

	const videos: { id: number; src: string; poster: string; title: string }[] = [
		{ id: 1, src: v1, poster: img1, title: "Video 1" },
		{ id: 2, src: v2, poster: img2, title: "Video 2" },
		{ id: 3, src: v3, poster: img3, title: "Video 3" },
	];
	return (
		<div className="app-container">
			<header>
				<h1>Xin chào quý khách</h1>
			</header>

			<main>
				<section>
					<h2>
						Công ty TNHH Phát triển Khoa học và Công nghệ Vina, Công ty TNHH
						Năng lượng Thiên Đức Phát
					</h2>
					<div className="grid">
						{images.map((i) => (
							<ImageCard key={i.id} src={i.src} alt={i.alt} title={i.title} />
						))}
					</div>
				</section>

				<section>
					<h2>
						Công ty TNHH Phát triển Khoa học và Công nghệ Vina, Công ty TNHH
						Năng lượng Thiên Đức Phát
					</h2>
					<div className="grid">
						{videos.map((v) => (
							<VideoCard
								key={v.id}
								src={v.src}
								poster={v.poster}
								title={v.title}
							/>
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
