
class Pencil extends Tool{
	constructor(canvas){
		super('Crayon', 'fa-pencil');
	this.canvas = canvas;
	this.on_click = false;
	}

		onmousedown(mouse_event){
			this.on_click = true;
			this.onmousemove(mouse_event);
		}
		onmouseup(mouse_event){
			this.on_click = false;
		}
		onmousemove(mouse_event){
			if (this.on_click == true){
				let position = this.canvas.screen_to_canvas(mouse_event);
				this.canvas.draw(position.x, position.y, pixel_studio.palette_color.get_selected());
			}
		}
}