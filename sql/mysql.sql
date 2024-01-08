-- Criado BAnco
CREATE DATABASE food /*!40100 COLLATE 'utf8mb4_general_ci' */

-- Criação da tabela OrderStatus
CREATE TABLE OrderStatus (
    id INT AUTO_INCREMENT NOT NULL,
    status VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

-- Inserção de valores padrão
INSERT INTO OrderStatus (status) VALUES ('PENDING'), ('PAID'), ('CANCELED');

-- Criação da tabela Customer
CREATE TABLE Customer (
    id INT AUTO_INCREMENT NOT NULL,
    fullName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mobile VARCHAR(255) NOT NULL,
    document VARCHAR(255) NOT NULL,
    zipCode VARCHAR(255) NOT NULL,
    street VARCHAR(255) NOT NULL,
    number VARCHAR(255) NOT NULL,
    complement VARCHAR(255),
    neighborhood VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state CHAR(2) NOT NULL,
    createdAt TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    updatedAt TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    PRIMARY KEY (id)
);

-- Criação da tabela Order
CREATE TABLE `Order` (
    id INT AUTO_INCREMENT NOT NULL,
    statusId INT NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    transactionId VARCHAR(255),
    createdAt TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    updatedAt TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    customerId INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (statusId) REFERENCES OrderStatus (id),
    FOREIGN KEY (customerId) REFERENCES Customer (id) ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Criação da tabela OrderItem
CREATE TABLE OrderItem (
    id INT AUTO_INCREMENT NOT NULL,
    quantity INT NOT NULL DEFAULT 0,
    subTotal DECIMAL(10,2) NOT NULL,
    createdAt TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    updatedAt TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    orderId INT NOT NULL,
    snackId INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (orderId) REFERENCES `Order` (id) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (snackId) REFERENCES Snack (id) ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Criar a Snack so apois criar as outras

CREATE TABLE Snack (
    id INT AUTO_INCREMENT NOT NULL,
    snack VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    image TEXT NOT NULL,
    createdAt TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    updatedAt TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    
    PRIMARY KEY (id)
);
