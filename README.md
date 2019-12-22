# ToDo_ReactNative_UnspalshAPI_FirebaseV6-Auth_Navigations
This app is a mix of react naitve firebase and api random pics technology to build a nice, light relaxing and enjoyable To Do application for Android And IOS using React naitve.


















ToDo Notes App
(Appy)

Prof.Ümit Kocabiçak
Mobile Programlama

Rıdvan Alhourani
G151210575



















Projenin amacı, Mobil Programlama dersinde React Naitve, Api, Local Database, Cloud/Remote Database (Firebase), State Mangement (MobX) gerçek bir problemine çözüm üretmek ve derste verilen teorik ve pratik olarak verilen bilgiler gerçekleştirmektedir.

Projeyi kendimi geliştirmek adına sıfırdan başlattım. İlk önce layout (styleler) ve tasarım derste ve internet üzerinden farklı kaynaklardan araştırarak basıt bir tasarım uyguladım:














































Kullandığım Teknolojiler

Genel olarak uygulamyı ihtiyaç duyduğu React Native framworku ve komponenti.


Yazıldığında ekran ve keyboard .. 







   Firebase Log in Screen






    • Firebase Cloud firebase ve Auth api (LogIn – SignUP) 
Firebase verion 6 son sürümü kurudum ve ilk başta Firebase V5,5 ten 6. versiona yeni geçildiği için dökümenler konusunda sorun yaşadım -büyük sürün-. Kuruduktan sonra zaten sınıfta gösterdiğiniz için gerisi kolay geldi. Yaptığınız şeyler aynısı yaptım ve aynı kodlar kullandım sadece Navigation kısımında gereken değişikler yaptım.



    • API
Uygulamamda ToDo Note uygulaması olduğu için API gibi kullanmaya bir yeri çok yoktu sonuçta bir (note todo) uygulaması. Ama öğrenme amaçlı yaptığım için bir fikir çıkarttım:  

 Api butona basıldığnda resim unsplash Api’yi kullananrak random resim çağrılır ve render edilir.


Note butona basıldığında note eklenir.

D üzerinde basıldığında note silinir.

Notlar bir array ve ScrollView ile alta alta bir list olarak gelir.














    • MobX 
Mobx state mangemetn ve izlemci kurulumu yaptum ve kullanmayı uyguladım ama hatalar krşılaştığım için yarı kaldı.

@observable 

Gördüğünüz gibi yukarıda ekranda iki button vardır. Asıl Tasarım tek bir button ile iki özelliği hem note ekleme hem de resim değiştirme async ve wait olarak çalıştırmak istedim ama bir yerde tam zamanlı çalıştığım için ve kısıtlı zaman yüzünden maalesef tamamlayamadım ama Mobxnedir ve nasıl çalıştığnı ve uygulamasını öğrendim ve önemli olan ve son amaç buydu zaten!

Aşağıdaki resimde TouchableObacity CombinedFunction() içinde resim alma ve note diziye ekleme fonksiyonları vardır. 


 
Son olarak Size Teşekkür etmek isterim. Derste verilen ve aldığım sizden bilgiler sadece dersle kapsamında değil. Tecrübeleriniz dersten bazen daha değerliydi. Projeyi yaptığımda eğlendim ve şuan bittiğinde uyumadığım gecelerdeki yorgunluğu uçtu.

Bitirme olarak Dönemin başında tezim Mobile uygulaması belirttim ve onu da react native Allah nasip ederse olacak.
