var express = require('express');
var router = express.Router();

const gif = [
	{
		type: 'gif',id: 'KcEQpHShfDMvC',
		slug: 'request-queue-spider-man-KcEQpHShfDMvC',
		url: 'https://giphy.com/gifs/request-queue-spider-man-KcEQpHShfDMvC',
		bitly_gif_url: 'https://gph.is/1sFLCzM',
		bitly_url: 'https://gph.is/1sFLCzM',
		embed_url: 'https://giphy.com/embed/KcEQpHShfDMvC',
		username: '',
		source: 'https://wifflegif.com',
		rating: 'g',
		content_url: '',
		source_tld: 'wifflegif.com',
		source_post_url: 'https://wifflegif.com',
		is_sticker: 0,
		import_datetime: '2016-06-15 04:45:01',
		trending_datetime: '1970-01-01 00:00:00',
		images: {
			fixed_height_still: {
				url: 'https://media3.giphy.com/media/KcEQpHShfDMvC/200_s.gif',
				width: '267',
				height: '200'
			},
			original_still: {
				url: 'https://media3.giphy.com/media/KcEQpHShfDMvC/giphy_s.gif',
				width: '500',
				height: '374'
			},
			fixed_width: {
				url: 'https://media3.giphy.com/media/KcEQpHShfDMvC/200w.gif',
				width: '200',
				height: '150',
				size: '41596',
				mp4: 'https://media3.giphy.com/media/KcEQpHShfDMvC/200w.mp4',
				mp4_size: '12408',
				webp: 'https://media3.giphy.com/media/KcEQpHShfDMvC/200w.webp',
				webp_size: '28422'
			},
			fixed_height_small_still: {
				url: 'https://media3.giphy.com/media/KcEQpHShfDMvC/100_s.gif',
				width: '134',
				height: '100'
			},
			fixed_height_downsampled: {
				url: 'https://media3.giphy.com/media/KcEQpHShfDMvC/200_d.gif',
				width: '267',
				height: '200',
				size: '67550',
				webp: 'https://media3.giphy.com/media/KcEQpHShfDMvC/200_d.webp',
				webp_size: '39438'
			},
			preview: {
				width: '400',
				height: '298',
				mp4: 'https://media3.giphy.com/media/KcEQpHShfDMvC/giphy-preview.mp4',
				mp4_size: '42884'
			},
			fixed_height_small: {
				url: 'https://media3.giphy.com/media/KcEQpHShfDMvC/100.gif',
				width: '134',
				height: '100',
				size: '20139',
				mp4: 'https://media3.giphy.com/media/KcEQpHShfDMvC/100.mp4',
				mp4_size: '6982',
				webp: 'https://media3.giphy.com/media/KcEQpHShfDMvC/100.webp',
				webp_size: '14424'
			},
			downsized_still: {
				url: 'https://media3.giphy.com/media/KcEQpHShfDMvC/giphy-downsized_s.gif',
				width: '500',
				height: '374',
				size: '121311'
			},
			downsized: {
				url: 'https://media3.giphy.com/media/KcEQpHShfDMvC/giphy-downsized.gif',
				width: '500',
				height: '374',
				size: '250341'
			},
			downsized_large: {
				url: 'https://media3.giphy.com/media/KcEQpHShfDMvC/giphy.gif',
				width: '500',
				height: '374',
				size: '250341'
			},
			fixed_width_small_still: {
				url: 'https://media3.giphy.com/media/KcEQpHShfDMvC/100w_s.gif',
				width: '100',
				height: '75'
			},
			preview_webp: {
				url: 'https://media3.giphy.com/media/KcEQpHShfDMvC/giphy-preview.webp',
				width: '241',
				height: '180',
				size: '48854'
			},
			fixed_width_still: {
				url: 'https://media3.giphy.com/media/KcEQpHShfDMvC/200w_s.gif',
				width: '200',
				height: '150'
			},
			fixed_width_small: {
				url: 'https://media3.giphy.com/media/KcEQpHShfDMvC/100w.gif',
				width: '100',
				height: '75',
				size: '12118',
				mp4: 'https://media3.giphy.com/media/KcEQpHShfDMvC/100w.mp4',
				mp4_size: '4944',
				webp: 'https://media3.giphy.com/media/KcEQpHShfDMvC/100w.webp',
				webp_size: '9582'
			},
			downsized_small: {
				width: '500',
				height: '374',
				mp4: 'https://media3.giphy.com/media/KcEQpHShfDMvC/giphy-downsized-small.mp4',
				mp4_size: '77389'
			},
			fixed_width_downsampled: {
				url: 'https://media3.giphy.com/media/KcEQpHShfDMvC/200w_d.gif',
				width: '200',
				height: '150',
				size: '39388',
				webp: 'https://media3.giphy.com/media/KcEQpHShfDMvC/200w_d.webp',
				webp_size: '25386'
			},
			downsized_medium: {
				url: 'https://media3.giphy.com/media/KcEQpHShfDMvC/giphy.gif',
				width: '500',
				height: '374',
				size: '250341'
			},
			original: {
				url: 'https://media3.giphy.com/media/KcEQpHShfDMvC/giphy.gif',
				width: '500',
				height: '374',
				size: '250341',
				frames: '7',
				mp4: 'https://media3.giphy.com/media/KcEQpHShfDMvC/giphy.mp4',
				mp4_size: '44516',
				webp: 'https://media3.giphy.com/media/KcEQpHShfDMvC/giphy.webp',
				webp_size: '133502'
			},
			fixed_height: {
				url: 'https://media3.giphy.com/media/KcEQpHShfDMvC/200.gif',
				width: '267',
				height: '200',
				size: '71656',
				mp4: 'https://media3.giphy.com/media/KcEQpHShfDMvC/200.mp4',
				mp4_size: '18085',
				webp: 'https://media3.giphy.com/media/KcEQpHShfDMvC/200.webp',
				webp_size: '44154'
			},
			looping: {
				mp4: 'https://media3.giphy.com/media/KcEQpHShfDMvC/giphy-loop.mp4',
				mp4_size: '974242'
			},
			original_mp4: {
				width: '480',
				height: '358',
				mp4: 'https://media3.giphy.com/media/KcEQpHShfDMvC/giphy.mp4',
				mp4_size: '44516'
			},
			preview_gif: {
				url: 'https://media3.giphy.com/media/KcEQpHShfDMvC/giphy-preview.gif',
				width: '223',
				height: '167',
				size: '47546'
			},
			'480w_still': {
				url: 'https://media4.giphy.com/media/KcEQpHShfDMvC/480w_s.jpg',
				width: '480',
				height: '359'
			}
		},
		title: 'spider man request GIF'
	},
	{
		type: 'gif',
		id: 'Lc1q6msajj8TS',
		slug: 'spider-man-train-Lc1q6msajj8TS',
		url: 'https://giphy.com/gifs/spider-man-train-Lc1q6msajj8TS',
		bitly_gif_url: 'https://gph.is/XKbzwb',
		bitly_url: 'https://gph.is/XKbzwb',
		embed_url: 'https://giphy.com/embed/Lc1q6msajj8TS',
		username: '',
		source: 'https://4gifs.tumblr.com/post/44026520571/spiderman-train',
		rating: 'g',
		content_url: '',
		source_tld: '4gifs.tumblr.com',
		source_post_url: 'https://4gifs.tumblr.com/post/44026520571/spiderman-train',
		is_sticker: 0,
		import_datetime: '2013-03-22 08:49:45',
		trending_datetime: '1970-01-01 00:00:00',
		images: {
			fixed_height_still: {
				url: 'https://media1.giphy.com/media/Lc1q6msajj8TS/200_s.gif',
				width: '340',
				height: '200'
			},
			original_still: {
				url: 'https://media1.giphy.com/media/Lc1q6msajj8TS/giphy_s.gif',
				width: '400',
				height: '235'
			},
			fixed_width: {
				url: 'https://media1.giphy.com/media/Lc1q6msajj8TS/200w.gif',
				width: '200',
				height: '118',
				size: '598502',
				mp4: 'https://media1.giphy.com/media/Lc1q6msajj8TS/200w.mp4',
				mp4_size: '86866',
				webp: 'https://media1.giphy.com/media/Lc1q6msajj8TS/200w.webp',
				webp_size: '323126'
			},
			fixed_height_small_still: {
				url: 'https://media1.giphy.com/media/Lc1q6msajj8TS/100_s.gif',
				width: '170',
				height: '100'
			},
			fixed_height_downsampled: {
				url: 'https://media1.giphy.com/media/Lc1q6msajj8TS/200_d.gif',
				width: '340',
				height: '200',
				size: '233736',
				webp: 'https://media1.giphy.com/media/Lc1q6msajj8TS/200_d.webp',
				webp_size: '105844'
			},
			preview: {
				width: '152',
				height: '88',
				mp4: 'https://media1.giphy.com/media/Lc1q6msajj8TS/giphy-preview.mp4',
				mp4_size: '36435'
			},
			fixed_height_small: {
				url: 'https://media1.giphy.com/media/Lc1q6msajj8TS/100.gif',
				width: '170',
				height: '100',
				size: '456125',
				mp4: 'https://media1.giphy.com/media/Lc1q6msajj8TS/100.mp4',
				mp4_size: '46281',
				webp: 'https://media1.giphy.com/media/Lc1q6msajj8TS/100.webp',
				webp_size: '246594'
			},
			downsized_still: {
				url: 'https://media1.giphy.com/media/Lc1q6msajj8TS/giphy-tumblr_s.gif',
				width: '250',
				height: '146'
			},
			downsized: {
				url: 'https://media1.giphy.com/media/Lc1q6msajj8TS/giphy-tumblr.gif',
				width: '250',
				height: '146',
				size: '881020'
			},
			downsized_large: {
				url: 'https://media1.giphy.com/media/Lc1q6msajj8TS/giphy.gif',
				width: '400',
				height: '235',
				size: '2092903'
			},
			fixed_width_small_still: {
				url: 'https://media1.giphy.com/media/Lc1q6msajj8TS/100w_s.gif',
				width: '100',
				height: '59'
			},
			preview_webp: {
				url: 'https://media1.giphy.com/media/Lc1q6msajj8TS/giphy-preview.webp',
				width: '167',
				height: '98',
				size: '49476'
			},
			fixed_width_still: {
				url: 'https://media1.giphy.com/media/Lc1q6msajj8TS/200w_s.gif',
				width: '200',
				height: '118'
			},
			fixed_width_small: {
				url: 'https://media1.giphy.com/media/Lc1q6msajj8TS/100w.gif',
				width: '100',
				height: '59',
				size: '179967',
				mp4: 'https://media1.giphy.com/media/Lc1q6msajj8TS/100w.mp4',
				mp4_size: '31946',
				webp: 'https://media1.giphy.com/media/Lc1q6msajj8TS/100w.webp',
				webp_size: '107600'
			},
			downsized_small: {
				width: '321',
				height: '188',
				mp4: 'https://media1.giphy.com/media/Lc1q6msajj8TS/giphy-downsized-small.mp4',
				mp4_size: '188025'
			},
			fixed_width_downsampled: {
				url: 'https://media1.giphy.com/media/Lc1q6msajj8TS/200w_d.gif',
				width: '200',
				height: '118',
				size: '87536',
				webp: 'https://media1.giphy.com/media/Lc1q6msajj8TS/200w_d.webp',
				webp_size: '46258'
			},
			downsized_medium: {
				url: 'https://media1.giphy.com/media/Lc1q6msajj8TS/giphy.gif',
				width: '400',
				height: '235',
				size: '2092903'
			},
			original: {
				url: 'https://media1.giphy.com/media/Lc1q6msajj8TS/giphy.gif',
				width: '400',
				height: '235',
				size: '2092903',
				frames: '41',
				mp4: 'https://media1.giphy.com/media/Lc1q6msajj8TS/giphy.mp4',
				mp4_size: '324584',
				webp: 'https://media1.giphy.com/media/Lc1q6msajj8TS/giphy.webp',
				webp_size: '1004034'
			},
			fixed_height: {
				url: 'https://media1.giphy.com/media/Lc1q6msajj8TS/200.gif',
				width: '340',
				height: '200',
				size: '1592517',
				mp4: 'https://media1.giphy.com/media/Lc1q6msajj8TS/200.mp4',
				mp4_size: '176862',
				webp: 'https://media1.giphy.com/media/Lc1q6msajj8TS/200.webp',
				webp_size: '743522'
			},
			looping: {
				mp4: 'https://media1.giphy.com/media/Lc1q6msajj8TS/giphy-loop.mp4',
				mp4_size: '1239422'
			},
			original_mp4: {
				width: '480',
				height: '282',
				mp4: 'https://media1.giphy.com/media/Lc1q6msajj8TS/giphy.mp4',
				mp4_size: '324584'
			},
			preview_gif: {
				url: 'https://media1.giphy.com/media/Lc1q6msajj8TS/giphy-preview.gif',
				width: '121',
				height: '71',
				size: '48592'
			},
			'480w_still': {
				url: 'https://media4.giphy.com/media/Lc1q6msajj8TS/480w_s.jpg',
				width: '480',
				height: '282'
			}
		},
		title: 'spider man train GIF'
	},
	{
		type: 'gif',
		id: '8GIrp9PyxMHbq',
		slug: 'visual-salvador-anguiano-8GIrp9PyxMHbq',
		url: 'https://giphy.com/gifs/visual-salvador-anguiano-8GIrp9PyxMHbq',
		bitly_gif_url: 'https://gph.is/1NNaP0t',
		bitly_url: 'https://gph.is/1NNaP0t',
		embed_url: 'https://giphy.com/embed/8GIrp9PyxMHbq',
		username: '',
		source: 'https://www.reddit.com/r/gifs/comments/3r93ll/visual_recap_of_spidermans_history_by_salvador/',
		rating: 'pg',
		content_url: '',
		source_tld: 'www.reddit.com',
		source_post_url: 'https://www.reddit.com/r/gifs/comments/3r93ll/visual_recap_of_spidermans_history_by_salvador/',
		is_sticker: 0,
		import_datetime: '2015-11-02 20:00:55',
		trending_datetime: '0000-00-00 00:00:00',
		images: {
			fixed_height_still: {
				url: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/200_s.gif',
				width: '200',
				height: '200'
			},
			original_still: {
				url: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/giphy_s.gif',
				width: '400',
				height: '400'
			},
			fixed_width: {
				url: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/200w.gif',
				width: '200',
				height: '200',
				size: '244461',
				mp4: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/200w.mp4',
				mp4_size: '179643',
				webp: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/200w.webp',
				webp_size: '340992'
			},
			fixed_height_small_still: {
				url: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/100_s.gif',
				width: '100',
				height: '100'
			},
			fixed_height_downsampled: {
				url: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/200_d.gif',
				width: '200',
				height: '200',
				size: '37517',
				webp: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/200_d.webp',
				webp_size: '43516'
			},
			preview: {
				width: '172',
				height: '172',
				mp4: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/giphy-preview.mp4',
				mp4_size: '36376'
			},
			fixed_height_small: {
				url: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/100.gif',
				width: '100',
				height: '100',
				size: '84926',
				mp4: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/100.mp4',
				mp4_size: '37650',
				webp: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/100.webp',
				webp_size: '125664'
			},
			downsized_still: {
				url: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/giphy-downsized_s.gif',
				width: '400',
				height: '400',
				size: '34164'
			},
			downsized: {
				url: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/giphy-downsized.gif',
				width: '400',
				height: '400',
				size: '968097'
			},
			downsized_large: {
				url: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/giphy.gif',
				width: '400',
				height: '400',
				size: '968097'
			},
			fixed_width_small_still: {
				url: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/100w_s.gif',
				width: '100',
				height: '100'
			},
			preview_webp: {
				url: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/giphy-preview.webp',
				width: '400',
				height: '400',
				size: '39430'
			},
			fixed_width_still: {
				url: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/200w_s.gif',
				width: '200',
				height: '200'
			},
			fixed_width_small: {
				url: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/100w.gif',
				width: '100',
				height: '100',
				size: '84926',
				mp4: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/100w.mp4',
				mp4_size: '37650',
				webp: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/100w.webp',
				webp_size: '125664'
			},
			downsized_small: {
				width: '200',
				height: '200',
				mp4: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/giphy-downsized-small.mp4',
				mp4_size: '194188'
			},
			fixed_width_downsampled: {
				url: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/200w_d.gif',
				width: '200',
				height: '200',
				size: '37517',
				webp: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/200w_d.webp',
				webp_size: '43516'
			},
			downsized_medium: {
				url: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/giphy.gif',
				width: '400',
				height: '400',
				size: '968097'
			},
			original: {
				url: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/giphy.gif',
				width: '400',
				height: '400',
				size: '968097',
				frames: '52',
				mp4: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/giphy.mp4',
				mp4_size: '705916',
				webp: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/giphy.webp',
				webp_size: '977322'
			},
			fixed_height: {
				url: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/200.gif',
				width: '200',
				height: '200',
				size: '244461',
				mp4: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/200.mp4',
				mp4_size: '179643',
				webp: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/200.webp',
				webp_size: '340992'
			},
			looping: {
				mp4: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/giphy-loop.mp4',
				mp4_size: '349014'
			},
			original_mp4: {
				width: '480',
				height: '480',
				mp4: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/giphy.mp4',
				mp4_size: '705916'
			},
			preview_gif: {
				url: 'https://media1.giphy.com/media/8GIrp9PyxMHbq/giphy-preview.gif',
				width: '345',
				height: '345',
				size: '48069'
			},
			'480w_still': {
				url: 'https://media3.giphy.com/media/8GIrp9PyxMHbq/480w_s.jpg',
				width: '480',
				height: '480'
			}
		},
		title: 'spider man design GIF'
	},
	{
		type: 'gif',
		id: 'xT9DPNstBsZ2sWvSkE',
		slug: 'cheezburger-captain-america-spider-man-civil-war-xT9DPNstBsZ2sWvSkE',
		url: 'https://giphy.com/gifs/cheezburger-captain-america-spider-man-civil-war-xT9DPNstBsZ2sWvSkE',
		bitly_gif_url: 'https://gph.is/1XftGoq',
		bitly_url: 'https://gph.is/1XftGoq',
		embed_url: 'https://giphy.com/embed/xT9DPNstBsZ2sWvSkE',
		username: 'cheezburger',
		source: 'https://cheezburger.com/78718977/captain-america-iron-man-trailers-iron-man-wants-to-hold-superheroes-accountable-for-collateral',
		rating: 'pg',
		content_url: '',
		source_tld: 'cheezburger.com',
		source_post_url: 'https://cheezburger.com/78718977/captain-america-iron-man-trailers-iron-man-wants-to-hold-superheroes-accountable-for-collateral',
		is_sticker: 0,
		import_datetime: '2016-03-10 17:40:02',
		trending_datetime: '2016-03-10 18:47:32',
		user: {
			avatar_url: 'https://media.giphy.com/avatars/cheezburger/zygsw6sWuOPu.jpg',
			banner_url: 'https://media.giphy.com/avatars/cheezburger/XkuejOhoGLE6.jpg',
			profile_url: 'https://giphy.com/cheezburger/',
			username: 'cheezburger',
			display_name: 'Cheezburger',
			twitter: '@cheezburger',
			is_verified: false
		},
		images: {
			fixed_height_still: {
				url: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/200_s.gif',
				width: '298',
				height: '200'
			},
			original_still: {
				url: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/giphy_s.gif',
				width: '391',
				height: '262'
			},
			fixed_width: {
				url: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/200w.gif',
				width: '200',
				height: '134',
				size: '706660',
				mp4: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/200w.mp4',
				mp4_size: '73570',
				webp: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/200w.webp',
				webp_size: '307840'
			},
			fixed_height_small_still: {
				url: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/100_s.gif',
				width: '149',
				height: '100'
			},
			fixed_height_downsampled: {
				url: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/200_d.gif',
				width: '298',
				height: '200',
				size: '147688',
				webp: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/200_d.webp',
				webp_size: '50812'
			},
			preview: {
				width: '306',
				height: '204',
				mp4: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/giphy-preview.mp4',
				mp4_size: '34452'
			},
			fixed_height_small: {
				url: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/100.gif',
				width: '149',
				height: '100',
				size: '439359',
				mp4: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/100.mp4',
				mp4_size: '51626',
				webp: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/100.webp',
				webp_size: '207484'
			},
			downsized_still: {
				url: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/giphy-tumblr_s.gif',
				width: '250',
				height: '167'
			},
			downsized: {
				url: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/giphy-tumblr.gif',
				width: '250',
				height: '167',
				size: '1011729'
			},
			downsized_large: {
				url: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/giphy.gif',
				width: '391',
				height: '262',
				size: '2075292'
			},
			fixed_width_small_still: {
				url: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/100w_s.gif',
				width: '100',
				height: '67'
			},
			preview_webp: {
				url: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/giphy-preview.webp',
				width: '164',
				height: '110',
				size: '49202'
			},
			fixed_width_still: {
				url: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/200w_s.gif',
				width: '200',
				height: '134'
			},
			fixed_width_small: {
				url: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/100w.gif',
				width: '100',
				height: '67',
				size: '223363',
				mp4: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/100w.mp4',
				mp4_size: '33526',
				webp: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/100w.webp',
				webp_size: '120244'
			},
			downsized_small: {
				width: '348',
				height: '234',
				mp4: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/giphy-downsized-small.mp4',
				mp4_size: '151233'
			},
			fixed_width_downsampled: {
				url: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/200w_d.gif',
				width: '200',
				height: '134',
				size: '76431',
				webp: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/200w_d.webp',
				webp_size: '29610'
			},
			downsized_medium: {
				url: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/giphy.gif',
				width: '391',
				height: '262',
				size: '2075292'
			},
			original: {
				url: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/giphy.gif',
				width: '391',
				height: '262',
				size: '2075292',
				frames: '61',
				mp4: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/giphy.mp4',
				mp4_size: '234127',
				webp: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/giphy.webp',
				webp_size: '836408'
			},
			fixed_height: {
				url: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/200.gif',
				width: '298',
				height: '200',
				size: '1383237',
				mp4: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/200.mp4',
				mp4_size: '116300',
				webp: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/200.webp',
				webp_size: '527926'
			},
			looping: {
				mp4: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/giphy-loop.mp4',
				mp4_size: '856004'
			},
			original_mp4: {
				width: '480',
				height: '320',
				mp4: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/giphy.mp4',
				mp4_size: '234127'
			},
			preview_gif: {
				url: 'https://media1.giphy.com/media/xT9DPNstBsZ2sWvSkE/giphy-preview.gif',
				width: '122',
				height: '82',
				size: '48294'
			},
			'480w_still': {
				url: 'https://media0.giphy.com/media/xT9DPNstBsZ2sWvSkE/480w_s.jpg',
				width: '480',
				height: '322'
			}
		},
		title: 'iron man underoos GIF by Cheezburger'
	},
	{
		type: 'gif',
		id: 'QA88yMhazfDI4',
		slug: 'spoilers-force-awakens-QA88yMhazfDI4',
		url: 'https://giphy.com/gifs/spoilers-force-awakens-QA88yMhazfDI4',
		bitly_gif_url: 'https://gph.is/1PdVYyK',
		bitly_url: 'https://gph.is/1PdVYyK',
		embed_url: 'https://giphy.com/embed/QA88yMhazfDI4',
		username: '',
		source: 'https://www.reddit.com/r/gifs/comments/3xdgv3/what_trying_to_dodge_the_force_awakens_spoilers/',
		rating: 'pg',
		content_url: '',
		source_tld: 'www.reddit.com',
		source_post_url: 'https://www.reddit.com/r/gifs/comments/3xdgv3/what_trying_to_dodge_the_force_awakens_spoilers/',
		is_sticker: 0,
		import_datetime: '2015-12-18 18:36:17',
		trending_datetime: '2015-12-18 23:19:53',
		images: {
			fixed_height_still: {
				url: 'https://media1.giphy.com/media/QA88yMhazfDI4/200_s.gif',
				width: '339',
				height: '200'
			},
			original_still: {
				url: 'https://media1.giphy.com/media/QA88yMhazfDI4/giphy_s.gif',
				width: '500',
				height: '295'
			},
			fixed_width: {
				url: 'https://media1.giphy.com/media/QA88yMhazfDI4/200w.gif',
				width: '200',
				height: '118',
				size: '90325',
				mp4: 'https://media1.giphy.com/media/QA88yMhazfDI4/200w.mp4',
				mp4_size: '20016',
				webp: 'https://media1.giphy.com/media/QA88yMhazfDI4/200w.webp',
				webp_size: '94058'
			},
			fixed_height_small_still: {
				url: 'https://media1.giphy.com/media/QA88yMhazfDI4/100_s.gif',
				width: '169',
				height: '100'
			},
			fixed_height_downsampled: {
				url: 'https://media1.giphy.com/media/QA88yMhazfDI4/200_d.gif',
				width: '339',
				height: '200',
				size: '82008',
				webp: 'https://media1.giphy.com/media/QA88yMhazfDI4/200_d.webp',
				webp_size: '66702'
			},
			preview: {
				width: '386',
				height: '226',
				mp4: 'https://media1.giphy.com/media/QA88yMhazfDI4/giphy-preview.mp4',
				mp4_size: '37660'
			},
			fixed_height_small: {
				url: 'https://media1.giphy.com/media/QA88yMhazfDI4/100.gif',
				width: '169',
				height: '100',
				size: '68703',
				mp4: 'https://media1.giphy.com/media/QA88yMhazfDI4/100.mp4',
				mp4_size: '15247',
				webp: 'https://media1.giphy.com/media/QA88yMhazfDI4/100.webp',
				webp_size: '71704'
			},
			downsized_still: {
				url: 'https://media1.giphy.com/media/QA88yMhazfDI4/giphy-downsized_s.gif',
				width: '500',
				height: '295',
				size: '21582'
			},
			downsized: {
				url: 'https://media1.giphy.com/media/QA88yMhazfDI4/giphy-downsized.gif',
				width: '500',
				height: '295',
				size: '444066'
			},
			downsized_large: {
				url: 'https://media1.giphy.com/media/QA88yMhazfDI4/giphy.gif',
				width: '500',
				height: '295',
				size: '444066'
			},
			fixed_width_small_still: {
				url: 'https://media1.giphy.com/media/QA88yMhazfDI4/100w_s.gif',
				width: '100',
				height: '59'
			},
			preview_webp: {
				url: 'https://media1.giphy.com/media/QA88yMhazfDI4/giphy-preview.webp',
				width: '276',
				height: '163',
				size: '48326'
			},
			fixed_width_still: {
				url: 'https://media1.giphy.com/media/QA88yMhazfDI4/200w_s.gif',
				width: '200',
				height: '118'
			},
			fixed_width_small: {
				url: 'https://media1.giphy.com/media/QA88yMhazfDI4/100w.gif',
				width: '100',
				height: '59',
				size: '28687',
				mp4: 'https://media1.giphy.com/media/QA88yMhazfDI4/100w.mp4',
				mp4_size: '7892',
				webp: 'https://media1.giphy.com/media/QA88yMhazfDI4/100w.webp',
				webp_size: '33840'
			},
			downsized_small: {
				width: '500',
				height: '294',
				mp4: 'https://media1.giphy.com/media/QA88yMhazfDI4/giphy-downsized-small.mp4',
				mp4_size: '83469'
			},
			fixed_width_downsampled: {
				url: 'https://media1.giphy.com/media/QA88yMhazfDI4/200w_d.gif',
				width: '200',
				height: '118',
				size: '30694',
				webp: 'https://media1.giphy.com/media/QA88yMhazfDI4/200w_d.webp',
				webp_size: '28712'
			},
			downsized_medium: {
				url: 'https://media1.giphy.com/media/QA88yMhazfDI4/giphy.gif',
				width: '500',
				height: '295',
				size: '444066'
			},
			original: {
				url: 'https://media1.giphy.com/media/QA88yMhazfDI4/giphy.gif',
				width: '500',
				height: '295',
				size: '444066',
				frames: '20',
				mp4: 'https://media1.giphy.com/media/QA88yMhazfDI4/giphy.mp4',
				mp4_size: '69642',
				webp: 'https://media1.giphy.com/media/QA88yMhazfDI4/giphy.webp',
				webp_size: '465616'
			},
			fixed_height: {
				url: 'https://media1.giphy.com/media/QA88yMhazfDI4/200.gif',
				width: '339',
				height: '200',
				size: '245844',
				mp4: 'https://media1.giphy.com/media/QA88yMhazfDI4/200.mp4',
				mp4_size: '39543',
				webp: 'https://media1.giphy.com/media/QA88yMhazfDI4/200.webp',
				webp_size: '217332'
			},
			looping: {
				mp4: 'https://media1.giphy.com/media/QA88yMhazfDI4/giphy-loop.mp4',
				mp4_size: '1651358'
			},
			original_mp4: {
				width: '480',
				height: '282',
				mp4: 'https://media1.giphy.com/media/QA88yMhazfDI4/giphy.mp4',
				mp4_size: '69642'
			},
			preview_gif: {
				url: 'https://media1.giphy.com/media/QA88yMhazfDI4/giphy-preview.gif',
				width: '264',
				height: '156',
				size: '49729'
			},
			'480w_still': {
				url: 'https://media0.giphy.com/media/QA88yMhazfDI4/480w_s.jpg',
				width: '480',
				height: '283'
			}
		},
		title: 'avoid spider man GIF'
	}
];

/* GET users listing. */
router.get('/', function(req, res) {
	switch (req.query.type) {
	case 'root': 
		setTimeout(function() {
			res.send(gif);
		}, 3000);
		break;
	case 'second': 
		setTimeout(function() {
			res.send({id: 'KcEQpHShfDMvC'});
		},2000);
		break;
	case 'third': 
		setTimeout(function() {
			res.send({status: 'success'});
		}, 5000);
		break;
	case 'four': 
		setTimeout(function() {
			res.send({status: 'hui'});
		}, 1000);
		break;		
	}
  
});

module.exports = router;
