import React from 'react'

export default function Markdown(props) {
	return (
		<div>
			<div className='markdown-body' dangerouslySetInnerHTML={{ __html: props.content }}>
			</div>
			<hr />
			<footer>
				<p>作者：<strong>Shun-Kai</strong></p>
				<p>邮箱：<strong>269596458@qq.com</strong></p>
				<p>转载请注明：转自<a href = 'http://fanshunkai.com'>http://fanshunkai.com</a></p>
			</footer>
		</div>

	)
}
