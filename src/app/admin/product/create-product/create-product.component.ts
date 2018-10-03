import { Component, OnInit } from '@angular/core';
import { guidGenerator } from '../../../x/utils';
import { AngularFireStorage } from 'angularfire2/storage';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';
import { ToastNotificationService } from '../../../x/http/toast-notification.service';
import { NgForm } from '@angular/forms';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../product.service';
import { route } from '../../../common/constant.common';
import { AuthService } from '../../../x/http/auth.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  imagesPath = [guidGenerator(), guidGenerator(), guidGenerator(), guidGenerator()]
  downloadURLs = ['', '', '', ''];
  imageIndex = -1
  uploadedImageIndex = -1
  uploadPercent: Observable<number>;
  downloadURL$: Observable<string>;
  product: Product
  customerID = ''

  constructor(
    private productService: ProductService,
    private fs: AngularFireStorage,
    private router: Router,
    private notify: ToastNotificationService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.customerID = params.customer_id
    })
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = this.imagesPath[this.imageIndex]
    const fileRef = this.fs.ref(filePath);
    const task = this.fs.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL$ = fileRef.getDownloadURL()
        this.downloadURL$.subscribe(downloadUrl => {
          this.downloadURLs[this.imageIndex] = downloadUrl
        })
      })
    ).subscribe()
  }

  onRegister(f: NgForm) {
    if (this.downloadURLs.filter(x => x !== '').length !== this.downloadURLs.length) {
      this.notify.error('Bạn chưa upload đủ ảnh')
      return
    }
    this.product = f.value
    this.product.gallery = this.downloadURLs
    this.product.customer_id = this.customerID
    this.productService.createProduct(this.product).subscribe(newProduct => {
      this.notify.success('Thêm sản phẩm thành công')
      this.router.navigate([route.rootProduct])
    })
  }
}
