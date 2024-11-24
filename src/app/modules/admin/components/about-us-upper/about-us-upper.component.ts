import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-us-upper',
  templateUrl: './about-us-upper.component.html',
  styleUrl: './about-us-upper.component.css'
})
export class AboutUsUpperComponent {

  selectedImage: string | null = null;
  selectedImage2: string | null = null;

  @ViewChild('fileInput')
  fileInput!: ElementRef<HTMLInputElement>;

  @ViewChild('fileInput2')
  fileInput2!: ElementRef<HTMLInputElement>;

  triggerFileInput(){
    console.log('sos');
    this.fileInput.nativeElement.click();
    
  }

  triggerFileInput2(){
    console.log('sos');
    this.fileInput2.nativeElement.click();
    
  }

  items: any = []
  
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onFileSelected2(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage2 = reader.result as string;
        this.items.push(this.selectedImage2)
        console.log(this.items);
        
      };
      reader.readAsDataURL(file);
    }
  }




}
