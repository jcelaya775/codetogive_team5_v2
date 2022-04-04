#!/usr/bin/env python
# coding: utf-8

# In[1]:


#import libraries
import numpy as np
import matplotlib.pyplot as plt 
import pandas as pd
import sklearn


# In[10]:


#PULL DATA

#pull class list

#for now
careerFieldList = ['consulting', 'biotech', 'fintech']

#pull dataset

#for now


# In[11]:


#format dataset

#make headers
headers = ['userID']
for careerField in careerFieldList:
    headers.append(careerField + '-explicit')
    headers.append(careerField + '-implicit')
    
#read csv
#for now

dataset = pd.read_csv("data.csv")
dataset.head(20)

#TODO 


# In[12]:


#get values
x = dataset.iloc[:, 1:-1].values
y = dataset.iloc[:, -1].values


# In[13]:


#train/test split
from sklearn.model_selection import train_test_split
xTrain, xTest, yTrain, yTest = train_test_split(x, y, test_size=0.1)


# In[14]:


#scale values
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
scaler.fit(x)
x = scaler.transform(x)


# In[15]:


#fit model
from sklearn.neighbors import KNeighborsClassifier

classifier = KNeighborsClassifier(n_neighbors=5)
classifier.fit(xTrain, yTrain)


# In[16]:


#test
from sklearn import metrics
predictions = classifier.predict(xTest)

print('INPUT')
print(xTest)
print('\n')
print('PREDICTED OUTPUT')
print(predictions)
print('\n')
print('TRUE OUTPUT')
print(yTest)
print('\n')

print('METRICS')
print(metrics.classification_report(yTest, predictions))


# In[29]:


#manual testing
exampleInput = [[5,25,9,20,7,5]]
singlePrediction = classifier.predict(exampleInput)
probabilities = classifier.predict_proba(exampleInput)

print('INTERESTS w/ PROBABILITIES')
classes = classifier.classes_
print(classes)
print(probabilities)

