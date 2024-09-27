class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
        <div class="gap-4">
            <img src="${this.image}" alt="" class="card-img-top">
            <div class="card-body">
                <p class="card-title fs-6 mt-3">${this.manufacture}/${this.model}</p>
                <p class="fw-bold">Rp ${this.rentPerDay} /hari</p>
                <p>${this.description}</p>

                <div class="d-flex mb-3">
                    <img src="../public/assets/icon/fi_users.svg" alt="">
                    <p class="ms-2 mb-0">${this.capacity} orang</p>
                </div>
                <div class="d-flex mb-3">
                    <img src="../public/assets/icon/fi_settings.svg" alt="">
                    <p class="ms-2 mb-0">${this.transmission}</p>
                </div>
                <div class="d-flex mb-3">
                    <img src="../public/assets/icon/fi_calendar.svg" alt="">
                    <p class="ms-2 mb-0">Tahun ${this.year}</p>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column">
            <button class="btn-cars">Pilih Mobil</button>
        </div>
    `;
  }
}

// <p>id: <b>${this.id}</b></p>
// <p>plate: <b>${this.plate}</b></p>
// <p>manufacture: <b>${this.manufacture}</b></p>
// <p>model: <b>${this.model}</b></p>
// <p>available at: <b>${this.availableAt}</b></p>
// <img src="${this.image}" alt="${this.manufacture}" width="64px">